/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/

function loadJS(url) {
   var xhttp = new XMLHttpRequest();
   var script = document.createElement("script");
   xhttp.open("GET", url + suffix, false);
   xhttp.send();
   script.text = xhttp.responseText;
   document.head.appendChild(script).parentNode.removeChild(script);
}

loadJS('./pages/homePage.js')
loadJS('./pages/weatherPage.js')
loadJS('./pages/musicPage.js')
loadJS('./pages/transportPage.js')
loadJS('./pages/riverPage.js')
loadJS('./screensaver.js')
// loadJS('./secret_token.js')

var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 4,
   /* working https connection, but weather servers are not exposed"
   serverUrl: 'https://hass.domain.ct',
   wsUrl: 'wss://hass.domain.ct/api/websocket',
   */
   // serverUrl: 'http://' + location.hostname + ':8123',
   serverUrl: 'http://' + location.hostname + ':30123',
   /* wsUrl: The URL to your HomeAssistant Websocket connection.
   * If HomeAssistant is behind SSL, replace ws:// with wss://
   */
   // wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   wsUrl: 'ws://' + location.hostname + ':30123/api/websocket',
   // authToken: bearer_token, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
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

   screensaver: screenSaverConfig,

   pages: [
      homePage,
      weatherPage,
      riverPage,
      musicPage,
      transportPage
   ],
}
