class Spotify
  def play
      %x( curl -X GET -H "Content-Type: application/json" -d '{"id":1,"method":"slim.request","params":["b8:27:eb:12:7c:b1",["play"]]}'     http://192.168.1.125:9000/jsonrpc.js )
  end
end