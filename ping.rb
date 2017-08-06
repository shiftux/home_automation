require 'net/ping'

module Ping

  @@TV_IP = '192.168.1.109'

  def self.tv_up
    up?(@@TV_IP)
  end

  def self.up?(host)
    check = Net::Ping::External.new(host)
    check.ping?
  end

end