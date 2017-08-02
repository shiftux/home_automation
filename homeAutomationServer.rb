# my home automation server
require 'sinatra/base'
require './spotify.rb'

class HomeAutomationServer < Sinatra::Base

  # Spotify
  get '/spotify_play' do
    Spotify.play
  end

end