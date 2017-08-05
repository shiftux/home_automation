module IR

  def self.toggle_samsung_power
      irRequest('samsung', 'KEY_POWER' )
  end

  def self.nad_lower_volume
      irRequest('nad', 'KEY_VOLUMEDOWN' )
  end

  def self.nad_increase_volume
      irRequest('nad', 'KEY_VOLUMEUP' )
  end

  def self.nad_power_off
      irRequest('nad', 'KEY_POWER2' )
  end

  def self.nad_power_on
      irRequest('nad', 'KEY_POWER' )
  end

  def self.arcam_music_input
      irRequest('arcam', 'KEY_NUMERIC_1' )
  end

  def self.arcam_tv_input
      irRequest('arcam', 'KEY_NUMERIC_2' )
  end

  def self.irRequest(device, key)
    command = "irsend SEND_ONCE #{device} #{key}"
    %x( "#{command}" )
  end

end