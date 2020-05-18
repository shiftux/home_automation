/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/


var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 4,
   serverUrl: 'http://' + location.hostname + ':8123',
   /* wsUrl: The URL to your HomeAssistant Websocket connection.
   * If HomeAssistant is behind SSL, replace ws:// with wss://
   */
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY
   onReady: function () {},

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         padding: '40px 130px 50px 50px',
         fontSize: '28px'
      },
      left: [
         {
            type: HEADER_ITEMS.TIME
         }
      ],
      right: [
         {
            type: HEADER_ITEMS.DATE,
            format: 'EEEE, d. MMMM'
         }
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
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
                     id: 'light.basic',
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
                     id: 'light.dual_red',
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
                     id: 'light.dual_white',
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
                     id: 'light.basic',
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
                     icons: {
                        on: "mdi-stop",
                        off: "mdi-stop"
                     },
                     state: false
                  // },
                  // {
                  //    position: [3, 4],
                  //    type: TYPES.SCRIPT, 
                  //    title: 'All off',
                  //    id: 'script.all_off',
                  //    icons: {
                  //       on: "mdi-flash-off",
                  //       off: "mdi-flash-off"
                  //    },
                  //    state: false
                  }
               ]
            },
         ]
      },
      {
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
                     type: TYPES.GAUGE,
                     title: 'Aare Temperature',
                     id: 'sensor.aare_temperature',
                     unit: 'C', // override default entity unit
                     state: false, // hidding state
                     // filter: function (value) { // optional
                     //    var num = parseFloat(value);
                     //    return num && !isNaN(num) ? num.toFixed(1) : value;
                     // },
                     value: function (item, entity) {
                        return entity.state;
                     },
                     settings: {
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 4, // https://aaremarzili.info/
                        max: 24, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 6, // Defaults to 6
                        label: 'Aare Temperature label', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        // prepend: '$', // Defaults to undefined
                        duration: 300000, // Defaults to 1500ms
                        thresholds: { 4: { color: 'red' }, 14: { color: 'orange' }, 18: { color: 'green' } },  // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 1, // Number of decimal places to round the number to. Defaults to current locale formatting
                     }
                   },
                  {
                     position: [1, 3],
                     type: TYPES.SENSOR,
                     // max : 350
                     // min : 30
   	       	      title: 'Aare Discharge',
                     id: 'sensor.aare_discharge',
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
                  // pegel
                  // max : 503.9
                  // min : 501.3
                ]
             },
         ]
      },
      {
         title: 'Music page',
         bg: 'images/bg5.jpg',
         icon: 'mdi-music', // home icon
         groups: [
            {
               title: '',
               width: 3,
               height: 4,
               items: [
                  {
                     position: [0, 0],
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
                     position: [2, 0],
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
                     position: [2, 1],
                     type: TYPES.SCRIPT,
                     id: 'script.volume_down',
                     title: '',
                     state: false,
                     icons: {
                        on: "mdi-volume-minus",
                        off: "mdi-volume-minus",
                     }
                  },
                  {
                     position: [0, 3],
                     type: TYPES.SCRIPT,
                     id: 'script.listen_music',
                     title: '',
                     state: false,
                     icons: {
                        on: "mdi-play",
                        off: "mdi-play",
                     }
                  },
                  {
                     position: [2, 3],
                     type: TYPES.SCRIPT,
                     id: 'script.media',
                     title: '',
                     state: false,
                     icons: {
                        on: "mdi-stop",
                        off: "mdi-stop",
                     }
                  }
               ]
            },
            {
               title: 'Playlists',
               width: 3,
               height: 4,
               items: [
                  {
                     position: [0, 0],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_discover_weekly',
                     title: 'Discover Weekly',
                     icons: {
                        on: "mdi-help",
                        off: "mdi-help"
                     },
                     state: false
                  },
                  {
                     position: [1, 0],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_discover_weekly_saves',
                     title: 'Discover Weekly Saves',
                     icons: {
                        on: "mdi-help-network",
                        off: "mdi-help-network"
                     },
                     state: false
                  },
                  {
                     position: [2, 0],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_easy_on_the_ears',
                     title: 'Easy on the ears',
                     icons: {
                        on: "mdi-ear-hearing",
                        off: "mdi-ear-hearing"
                     },
                     state: false
                  },
                  {
                     position: [0, 1],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_starred',
                     title: 'Starred',
                     icons: {
                        on: "mdi-star",
                        off: "mdi-star"
                     },
                     state: false
                  },
                  {
                     position: [1, 1],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_funky',
                     title: 'Funky',
                     icons: {
                        on: "mdi-guitar-electric",
                        off: "mdi-guitar-electric"
                     },
                     state: false
                  },
                  {
                     position: [2, 1],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_no_isi',
                     title: 'No isi',
                     icons: {
                        on: "mdi-check",
                        off: "mdi-check"
                     },
                     state: false
                  },
                  {
                     position: [0, 2],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_new_isi',
                     title: 'New isi',
                     icons: {
                        on: "mdi-check-all",
                        off: "mdi-check-all"
                     },
                     state: false
                  },
                  {
                     position: [1, 2],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_discoveries',
                     title: 'Discoveries',
                     icons: {
                        on: "mdi-eye-outline",
                        off: "mdi-eye-outline"
                     },
                     state: false
                  },
                  {
                     position: [2, 2],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_grrif_style',
                     title: 'Grrif Style',
                     icons: {
                        on: "mdi-alpha-g-circle-outline",
                        off: "mdi-alpha-g-circle-outline"
                     },
                     state: false
                  },
                  {
                     position: [0, 3],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_organica_deep_house',
                     title: 'Organica Deep House',
                     icons: {
                        on: "mdi-home-circle-outline",
                        off: "mdi-home-circle-outline"
                     },
                     state: false
                  },
                  {
                     position: [1, 3],
                     type: TYPES.SCRIPT,
                     id: 'script.playlist_workout',
                     title: 'Workout',
                     icons: {
                        on: "mdi-dumbbell",
                        off: "mdi-dumbbell"
                     },
                     state: false
                  }
               ]
            },
         ]
      }
   ],
}
