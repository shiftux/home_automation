module Spotify

  @@spotifyServer = 'http://192.168.1.125:9000'
  @@defaultPlayer = "b8:27:eb:12:7c:b1"
  
  def self.play
    puts @@spotifyServer
    command = 'curl -X GET -H "Content-Type: application/json" -d "{\"id"\:1,\"method\":\"slim.request\",\"params\":[#{@@defaultPlayer},[\"play\"]]}"     "#{@@spotifyServer}"/jsonrpc.js'
    %x(  )
  end

end