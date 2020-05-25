const weatherPage = {
  title: 'Weather page',
  bg: 'images/bg2.png',
  icon: 'mdi-weather-partly-cloudy',
  groups: [
    {
      title: '',
      width: 3,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 3,
          height: 2,
          refresh: 1000000,
          title: 'Forecast Bern',
          type: TYPES.IFRAME,
          id: {}, // using empty object for an unknown id
          url: "http://192.168.0.28:8080/"
        },
        {
          position: [0, 2],
          width: 3,
          height: 2,
          refresh: 1000000,
          title: 'Daily Graph',
          type: TYPES.IFRAME,
          id: {}, // using empty object for an unknown id
          url: "http://192.168.0.28:8082/"
        }
      ]
    },
    {
      title: '',
      width: 3,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 3,
          height: 3,
          refresh: 1000000,
          title: 'Radar',
          type: TYPES.IFRAME,
          id: {}, // using empty object for an unknown id
          url: "http://192.168.0.28:8081/"
        },
        {
          position: [0, 3],
          type: TYPES.SENSOR,
          title: 'Aare Temperature',
          id: 'sensor.aare_temperature',
          customStyles: { 'background-color': '#fca311' },
          unit: 'C', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            var num = parseFloat(value);
            return num && !isNaN(num) ? num.toFixed(1) : value;
          }
        },
        {
          position: [1, 3],
          type: TYPES.SENSOR,
          title: 'Aare Discharge',
          id: 'sensor.aare_discharge',
          customStyles: { 'background-color': '#fca311' },
          unit: 'm3/s', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            var num = parseFloat(value);
            return num && !isNaN(num) ? num.toFixed(1) : value;
          },
          settings: {
            foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
            backgroundColor: 'rgba(166,166,166, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
          }
        },
      ]
    },
  ]
}
