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
          url: "http://192.168.0.28:30880/"
        },
        {
          position: [0, 2],
          width: 3,
          height: 2,
          refresh: 1000000,
          title: 'Daily Graph',
          type: TYPES.IFRAME,
          id: {}, // using empty object for an unknown id
          url: "http://192.168.0.28:30882/"
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
          url: "http://192.168.0.28:30881/"
        }
      ]
    },
  ]
}
