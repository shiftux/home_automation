require 'rest-client'

module Spotify

  @@spotifyServer = 'http://192.168.1.125:9000'
  @@defaultPlayer = "b8:27:eb:12:7c:b1"
  
  # def self.play
  #   payload = {"id": 1,"method": "slim.request", "params": [@@defaultPlayer, ["play"]]}
  #   command = "curl -X GET -H \"Content-Type: application/json\" -d "
  #   hostaddress = "#{@@spotifyServer}/jsonrpc.js"
  #   %x( "#{command} #{hostaddress}" )
  #   RestClient.get(hostaddress, payload.to_json, content_type: :json)
  # end

  def self.play
    playerCommand = "play"
    payload = {"id" => 1,"method" => "slim.request", "params" => ["#{@@defaultPlayer}", ["#{playerCommand}"]]}
    RestClient::Request.new(
      :method => :post,
      :url => "#{@@spotifyServer}/jsonrpc.js",
      :payload => payload,
      :headers => {:content_type => "application/json"},
      :verify_ssl => OpenSSL::SSL::VERIFY_NONE
    ).execute {|resp|
      return resp
    }
  end

  # def self.rest_request(destination_cmdb, path, method, payload = '')
  #   RestClient::Request.new(
  #     :method => method,
  #     :url => "#{destination_cmdb}:#{@@port}/#{path}",
  #     :payload => payload,
  #     :headers => {:content_type => "application/xml" , "Access-Token" => @@access_token},
  #     :verify_ssl => OpenSSL::SSL::VERIFY_NONE
  #   ).execute {|resp|
  #     return resp
  #   }
  # end

end