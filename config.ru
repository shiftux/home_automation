require 'rubygems'
require 'bundler'
Bundler.require

require './homeAutomationServer'

set :logging, true
set :server, %w[thin]

map '/' do
  run HomeAutomationServer
end