const riverPage = {
  title: 'River page',
  bg: 'images/bg_pattern.jpg',
  icon: 'mdi-waves',
  groups: [
    {
      title: 'Temperatur',
      width: 2,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 2,
          height: 2,
          title: 'Aktuelli Temperatur',
          type: TYPES.SENSOR,
          id: 'sensor.aareguru_temp',
          unit: 'C', // override default entity unit
          state: false, // hidding state
          customStyles: { 'background-color': '#e63946' }
        },
        {
          position: [0, 2],
          width: 2,
          height: 2,
          type: TYPES.CUSTOM_SENSOR,
          id: 'sensor.aareguru_temp_text',
          unit: '', // override default entity unit
          title: '',
          state: false, // hidding state
          customStyles: { 'background-color': '#e63946' }
        }
      ]
    },
    {
      title: 'Temperatur i 2 Stung',
      width: 2,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 2,
          height: 2,
          title: 'i 2 Stung',
          type: TYPES.SENSOR,
          id: 'sensor.aareguru_temp_forecast',
          unit: 'C', // override default entity unit
          state: false, // hidding state
          customStyles: { 'color': '#808080','background-color': '#f1faee' }
        },
        {
          position: [0, 2],
          width: 2,
          height: 2,
          type: TYPES.CUSTOM_SENSOR,
          id: 'sensor.aareguru_temp_forecast_text',
          unit: '', // override default entity unit
          title: '',
          state: false, // hidding state
          customStyles: { 'color': '#808080','background-color': '#f1faee'}
        }
      ]
    },
    {
      title: 'Wassermängi',
      width: 2,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 2,
          height: 2,
          title: 'Wassermängi',
          type: TYPES.SENSOR,
          id: 'sensor.aareguru_flow',
          unit: 'm^3/s', // override default entity unit
          state: false, // hidding state
          customStyles: { 'background-color': '#a8dadc' }
        },
        {
          position: [0, 2],
          width: 2,
          height: 2,
          type: TYPES.CUSTOM_SENSOR,
          id: 'sensor.aareguru_flow_text',
          unit: '', // override default entity unit
          title: '',
          state: false, // hidding state
          customStyles: { 'background-color': '#a8dadc'}
        }
      ]
    }
  ]
}
