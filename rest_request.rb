require 'rest-client'
require 'json'

module RestRequest

  def self.rest_request(host, path, method, payload = '')
    RestClient::Request.new(
      :method => method,
      :url => "#{host}/#{path}",
      :payload => payload.to_json,
      :headers => {:content_type => "application/josn"},
      :verify_ssl => OpenSSL::SSL::VERIFY_NONE
    ).execute {|resp|
      return resp
    }
  end

end