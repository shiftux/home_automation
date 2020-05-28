const homePage = {
  title: 'Home page',
  bg: 'images/bg1.jpeg',
  icon: 'mdi-home-outline', // home icon
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
          title: 'Weather Bern',
          type: TYPES.IFRAME,
          id: {}, // using empty object for an unknown id
          url: "http://192.168.0.28:8080/"
        },
        {
          position: [0, 2],
          width: 2,
          height: 2,
          id: 'media_player.picorelivingroom',
          type: TYPES.MEDIA_PLAYER_CUSTOM,
          hideSource: false,
          hideMuteButton: false,
          // state: false,
          title: '@attributes.media_title',
          subtitle: '@attributes.media_artist',
          bgSuffix: '@attributes.entity_picture',
        },
        {
          position: [2, 2],
          type: TYPES.SCRIPT,
          id: 'script.volume_up',
          title: '',
          state: false,
          icons: {
            on: "mdi-volume-plus",
            off: "mdi-volume-plus",
          }
        },
        {
          position: [2, 3],
          type: TYPES.SCRIPT,
          id: 'script.volume_down',
          title: '',
          state: false,
          icons: {
            on: "mdi-volume-minus",
            off: "mdi-volume-minus",
          }
        }
      ]
    },
    {
      title: '',
      width: 3,
      height: 4,
      items: [
        {
          type: TYPES.LIGHT,
          position: [0, 0],
          title: 'Entry',
          // subtitle: 'Lounge',
          id: 'light.entry',
          state: false,
          states: {
            on: "On",
            off: "Off"
          },
          icons: {
            on: "mdi-lightbulb-on",
            off: "mdi-lightbulb",
          },
        },
        {
          type: TYPES.LIGHT,
          position: [1, 0],
          title: 'Living Room',
          // subtitle: 'Lounge',
          id: 'light.living_room',
          state: false,
          states: {
            on: "On",
            off: "Off"
          },
          icons: {
            on: "mdi-lightbulb-on",
            off: "mdi-lightbulb",
          },
        }, 
        {
          type: TYPES.LIGHT,
          position: [2, 0],
          title: 'Kitchen',
          // subtitle: 'Lounge',
          id: 'light.kitchen',
          state: false,
          states: {
            on: "On",
            off: "Off"
          },
          icons: {
            on: "mdi-lightbulb-on",
            off: "mdi-lightbulb",
          },
        },
        {
          type: TYPES.LIGHT,
          position: [0, 1],
          title: 'Dining Room',
          // subtitle: 'Lounge',
          id: 'light.dining_room',
          state: false,
          states: {
            on: "On",
            off: "Off"
          },
          icons: {
            on: "mdi-lightbulb-on",
            off: "mdi-lightbulb",
          },
        },
        {
          type: TYPES.LIGHT,
          position: [2, 1],
          title: 'All lights',
          // subtitle: 'Lounge',
          id: 'light.all_lights',
          state: false,
          states: {
            on: "On",
            off: "Off"
          },
          icons: {
            on: "mdi-lightbulb-on",
            off: "mdi-lightbulb",
          },
        },
        {
          position: [0, 2],
          type: TYPES.SCRIPT,
          id: 'script.listen_music',
          customStyles: {'background-color':'#00a896'},
          icons: {
            on: "mdi-music",
            off: "mdi-music"
          },
          state: false
        },
        {
          position: [1, 2],
          type: TYPES.SCRIPT,
          title: 'Watch TV',
          customStyles: {'background-color':'#00a896'},
          id: 'script.watch_tv',
          icons: {
            on: "mdi-movie-open",
            off: "mdi-movie-open"
          },
          state: false
        },
        {
          position: [0, 3],
          type: TYPES.SCRIPT,
          id: 'script.media',
          title: 'Media Off',
          customStyles: {'background-color':'#e63946'},
          icons: {
            on: "mdi-stop",
            off: "mdi-stop"
          },
          state: false
        },
        {
          position: [3, 4],
          type: TYPES.SCRIPT, 
          title: 'All off',
          id: 'script.all_off',
          customStyles: { 'background-color': '#e63946' },
          icons: {
            on: "mdi-flash-off",
            off: "mdi-flash-off"
          },
          state: false
        }
      ]
    }
  ]
}
