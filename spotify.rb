require './rest_request.rb'

module Spotify

  @@spotifyServer = 'http://192.168.1.125:9000'
  @@defaultPlayer = "b8:27:eb:12:7c:b1"
  @@playlists = {
    "discover_weekly" => "spotify:user:spotify:playlist:37i9dQZEVXcSlMQNVajogn",
    "discover_weekly_saves" => "spotify:user:shiftux:playlist:3jsoStJkZ2N97oh1bJBCdF",
    "easy_on_the_ears" => "spotify:user:shiftux:playlist:7r0UpOkMuDWIMobO1HDEjh",
    "starred" => "spotify:user:shiftux:playlist:3yCTHjJl9xBLqukdvQqYon",
    "great_ballads" => "spotify:user:shiftux:playlist:1T5H1xkw9xP1nG9oFG276S",
    "funky" => "spotify:user:shiftux:playlist:38vMaIdHyEKUllTPqC2lzu",
  }

  def self.play
    spotifyRequest(["play"])
  end

  def self.stop
    spotifyRequest(["pause", "1"])
  end

  def self.next_song
    spotifyRequest(["playlist","jump","1"])
  end

  def self.play_playlist(playlist_name)
    playlist = playlist_name.downcase.tr(" ", "_")
    spotifyRequest(["playlist","play",@@playlists[playlist]])
  end

  def self.spotifyRequest(playerCommand)
    payload = {"id" => 1,"method" => "slim.request", "params" => ["#{@@defaultPlayer}", playerCommand]}
    RestRequest.rest_request(@@spotifyServer, 'jsonrpc.js', :post, payload)
  end

end