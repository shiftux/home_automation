# my home automation server
require 'sinatra'
require './spotify.rb'

def initialize
  spotify = Spotify.new
end

# Spotify
get '/spotify_play' do
  spotify.play
end