# my home automation server
require 'sinatra/base'
require './spotify.rb'

class homeAutomationServer < Sinatra::Base

# Spotify
get '/spotify_play' do
  Spotify.play
end