# my home automation server
require 'sinatra/base'
require './spotify.rb'
require './infrared.rb'
require './ping.rb'

class HomeAutomationServer < Sinatra::Base

  # use Rack::Auth::Basic, "Authentication" do |username, password|
  #    username == 'user' && password == 'pass'
  # end

  #######################################################
  # Spotify
  #######################################################
  get '/spotify_play' do
    IR.nad_power_on
    IR.arcam_music_input
    IR.samsung_toggle_power if Ping.tv_up
    Spotify.play
  end

  get '/spotify_stop' do
    Spotify.stop
  end

  get '/spotify_next_song' do
    Spotify.next_song
  end

  get '/spotify_get_status' do
    Spotify.get_status
  end

  get '/spotify_play_playlist/:playlist_name' do
    IR.nad_power_on
    IR.arcam_music_input
    Spotify.play_playlist(params['playlist_name'])
  end

  #######################################################
  # Infrared
  #######################################################
  get '/toggle_samsung_power' do
    IR.toggle_samsung_power
  end

  get '/nad_lower_volume' do
    IR.nad_lower_volume
  end

  get '/nad_increase_volume' do
    IR.nad_increase_volume
  end

  get '/nad_power_off' do
    IR.nad_power_off
  end

  get '/nad_power_on' do
    IR.nad_power_on
  end

  get '/arcam_music_input' do
    IR.arcam_music_input
  end

  get '/arcam_tv_input' do
    IR.arcam_tv_input
  end

  get '/samsung_toggle_power' do
    IR.samsung_toggle_power
  end

  get '/turn_off_media' do
    IR.nad_power_off
    Spotify.stop
    IR.samsung_toggle_power if Ping.tv_up
  end

  get '/watch_tv' do
    IR.nad_power_on
    Spotify.stop
    IR.arcam_tv_input
    IR.samsung_toggle_power unless Ping.tv_up
  end

end