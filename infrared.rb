# https://github.com/davorf/BlackBeanControl

module IR

  def self.toggle_samsung_power
      irRequest('samsung_power' )
  end

  def self.nad_lower_volume
      irRequest('nad_volumedown' )
      irRequest('nad_volumedown' )
  end

  def self.nad_increase_volume
      irRequest('nad_volumeup' )
      irRequest('nad_volumeup' )
  end

  def self.nad_power_off
      irRequest('nad_poweroff' )
  end

  def self.nad_power_on
      irRequest('nad_poweron' )
  end

  def self.arcam_music_input
      irRequest('arcam_musicinput' )
  end

  def self.arcam_tv_input
      irRequest('arcam_tvinput' )
  end

  def self.samsung_toggle_power
      irRequest('samsung_power' )
  end

  def self.irRequest(command)
    command = "python BlackBeanControl.py -c #{command}"
    %x( eval "#{command}" )
  end

end
