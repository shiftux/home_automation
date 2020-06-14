#!/bin/bash
# source: https://www.instructables.com/id/Quick-and-Dirty-Dynamic-DNS-Using-GoDaddy/

###########
# update godaddy
###########
mydomain="shiftux.org"
myhostname="hass"
gd_apikey="e52jGTSiBTfr_2A7HGMUXr7oqFQBhYxHh91:FvsHVM7cCRbYLUhMhnhSyk"
logdest="local7.info"

myip=`curl -s "https://api.ipify.org"`
dnsdata=`curl -s -X GET -H "Authorization: sso-key ${gd_apikey}" "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}"`
gdip=`echo $dnsdata | cut -d ',' -f 1 | tr -d '"' | cut -d ":" -f 2`
echo "`date '+%Y-%m-%d %H:%M:%S'` - Current External IP is $myip, GoDaddy DNS IP is $gdip"

if [ "$gdip" != "$myip" -a "$myip" != "" ]; then
  echo "IP has changed!! Updating on GoDaddy"
  curl -s -X PUT "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}" -H "Authorization: sso-key ${gd_apikey}" -H "Content-Type: application/json" -d "[{\"data\": \"${myip}\"}]"
  # logger -p $logdest "Changed IP on ${hostname}.${mydomain} from ${gdip} to ${myip}"
  echo "Changed IP on ${hostname}.${mydomain} from ${gdip} to ${myip}"
else
  echo "nothing to do"
fi

###########
# update ingress
###########

helm_deploy_command="helm install hass-nginx-ingress ingress-nginx/ingress-nginx \
  --set controller.image.repository=\"quay.io/kubernetes-ingress-controller/nginx-ingress-controller-arm64\"\
  --set defaultBackend.image.repository=\"k8s.gcr.io/defaultbackend-arm64\"\
  --set controller.service.externalIPs={\"${myip}\"}\
  --set rbac.create=true\
  --set controller.publishService.enabled=true\
  --set controller.service.type=NodePort \
  --set controller.service.httpsPort.nodePort=31123 "

helm list | grep hass-nginx-ingress >> /dev/null
retVal=$?
if [ $retVal -ne 0 ]; then
  echo "installing nginx-ingress via helm"
  helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
  helm repo update
  eval "$helm_deploy_command"
else
  echo "nginx-ingress exists"
fi

helm_extip=$(helm get values hass-nginx-ingress | grep -A 1 externalIP | tail -n 1 | sed -e "s/^    - //")
echo "helm was created using IP ${helm_extip}"
if [ "$helm_extip" != "$myip" ]; then
  helm uninstall hass-nginx-ingress
  eval "$helm_deploy_command"
  echo "changed helm ingress deployment to have new IP"
else
  echo "helm is up to date"
fi
