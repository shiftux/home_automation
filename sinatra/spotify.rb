require './rest_request.rb'
require 'rubygems'
require 'json'

module Spotify

  @@spotifyServer = 'http://192.168.0.93:9000'
  @@defaultPlayer = "b8:27:eb:12:7c:b1"
  @@playlists = {
    "discover_weekly" => "spotify:user:spotify:playlist:37i9dQZEVXcSlMQNVajogn",
    "discover_weekly_saves" => "spotify:user:shiftux:playlist:3jsoStJkZ2N97oh1bJBCdF",
    "easy_on_the_ears" => "spotify:user:shiftux:playlist:7r0UpOkMuDWIMobO1HDEjh",
    "starred" => "spotify:user:shiftux:playlist:3yCTHjJl9xBLqukdvQqYon",
    "great_ballads" => "spotify:user:shiftux:playlist:1T5H1xkw9xP1nG9oFG276S",
    "funky" => "spotify:user:shiftux:playlist:38vMaIdHyEKUllTPqC2lzu",
    "no_isi" => "spotify:user:shiftux:playlist:7Mm1cpwJTIYEcZnnOA9ONa",
    "rock_this" => "spotify:user:spotify:playlist:37i9dQZF1DXcF6B6QPhFDv",
    "classic_rock" => "spotify:user:shiftux:playlist:41AMKtHMrxkYVcb6tq91Tb"
  }

  def self.play
    spotifyRequest(["play"])
  end

  def self.stop
    spotifyRequest(["pause", "1"])
  end

  def self.next_song
    next_index = get_current_song_index + 1
    spotifyRequest(["playlist","jump","#{next_index}"])
  end

  def self.play_playlist(playlist_name)
    playlist = playlist_name.downcase.tr(" ", "_")
    spotifyRequest(["playlist","play",@@playlists[playlist]])
  end

  def self.get_status
    JSON.parse(spotifyRequest(["status"]))
  end

  def self.get_current_song_index
    reply = get_status
    reply["result"]["playlist_cur_index"].to_i
  end

  def self.spotifyRequest(playerCommand)
    payload = {"id" => 1,"method" => "slim.request", "params" => ["#{@@defaultPlayer}", playerCommand]}
    RestRequest.rest_request(@@spotifyServer, 'jsonrpc.js', :post, payload)
  end

end
