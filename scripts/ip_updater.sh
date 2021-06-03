#!/bin/bash
# source: https://www.instructables.com/id/Quick-and-Dirty-Dynamic-DNS-Using-GoDaddy/

date=$(date)
echo "################# running IP updater, on $date #################"

###########
# update godaddy
###########
mydomain="shiftux.org"
myhostname="hass"
gd_apikey="e52jGTSiBTfr_2A7HGMUXr7oqFQBhYxHh91:FvsHVM7cCRbYLUhMhnhSyk"
port=31223

myip=`curl -s "https://api.ipify.org"`
dnsdata=`curl -s -X GET -H "Authorization: sso-key ${gd_apikey}" "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}"`
gdip=`echo $dnsdata | cut -d ',' -f 1 | tr -d '"' | cut -d ":" -f 2`
echo "`date '+%Y-%m-%d %H:%M:%S'` - Current External IP is $myip, GoDaddy DNS IP is $gdip"

if [ "$gdip" != "$myip" -a "$myip" != "" ]; then
  echo "IP has changed!! Updating on GoDaddy"
  curl -s -X PUT "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}" -H "Authorization: sso-key ${gd_apikey}" -H "Content-Type: application/json" -d "[{\"data\": \"${myip}\"}]"
  echo "Changed IP on ${hostname}.${mydomain} from ${gdip} to ${myip}"
  echo "waiting for changes to propagate"
  sleep 5
else
  echo "nothing to do"
fi

new_dnsdata=`curl -s -X GET -H "Authorization: sso-key ${gd_apikey}" "https://api.godaddy.com/v1/domains/${mydomain}/records/A/${myhostname}"`
new_gdip=`echo $new_dnsdata | cut -d ',' -f 1 | tr -d '"' | cut -d ":" -f 2`
if [ "$new_gdip" != "$myip" -a "$myip" != "" ]; then
  echo "Failed to update GoDaddy. Terminating"
  exit 1
else
  echo "IPs are matching. Exiting"
  exit 0
fi

: <<'END'
###########
# update ingress
###########

helm_deploy_command="/usr/local/bin/helm install hass-nginx-ingress ingress-nginx/ingress-nginx \
  --set controller.service.externalIPs={\"${myip}\"}\
  --set controller.service.type=NodePort \
  --set controller.service.nodePorts.https=\"$port\" "

/usr/local/bin/helm list | grep hass-nginx-ingress >> /dev/null
helmListVal=$?
if [ "$helmListVal" -ne 0 ]; then
  echo "installing nginx-ingress via helm"
  /usr/local/bin/helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
  /usr/local/bin/helm repo update
  eval "$helm_deploy_command"
else
  echo "nginx-ingress exists"
fi

helm_extip=$(/usr/local/bin/helm get values hass-nginx-ingress | grep -A 1 externalIP | tail -n 1 | sed -e "s/^    - //")
svcPorts=$(kubectl get svc hass-nginx-ingress-ingress-nginx-controller | tail -n 1 | awk '{print $5}')
echo $svcPorts | grep 443:"$port" >> /dev/null
svcPortCorrect=$?
echo "helm was created using IP ${helm_extip} and ports ${svcPorts}"
if [ "$helm_extip" != "$myip" ] || [ "$svcPortCorrect" -ne 0 ]; then
  /usr/local/bin/helm uninstall hass-nginx-ingress
  eval "$helm_deploy_command" >> /dev/null
  echo "changed helm ingress deployment to have new IP or port"
else
  echo "helm is up to date"
fi
END
