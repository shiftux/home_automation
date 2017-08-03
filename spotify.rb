require 'faraday'

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
    connection = Faraday.new(:url => @@spotifyServer) do |faraday|
      faraday.response :logger
      faraday.adapter Faraday.default_adapter    # make requests with Net::HTTP
    end

    response = connection.post do |req|
        req.url '/jsonrpc.js'
        req.headers['Content-Type'] = 'application/json'
        req.body = '{"id": 1,"method": "slim.request", "params": ["#{@@defaultPlayer}", ["#{playerCommand}"]]}'
    end
  end

end