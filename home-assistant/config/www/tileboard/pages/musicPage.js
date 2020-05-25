const musicPage = {
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
          position: [1, 3],
          type: TYPES.SWITCH,
          id: 'switch.lms_shuffle',
          title: '',
          state: false,
          icons: {
            on: "mdi-shuffle-variant",
            off: "mdi-shuffle-disabled",
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
      title: 'Playlists / Podcasts',
      width: 3,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_discover_weekly',
          title: 'Discover Weekly',
          customStyles: { 'color': '#808080', 'background-color': '#f4f1de' },
          icons: {
            on: "mdi-help",
            off: "mdi-help"
          },
          state: false
        },
        {
          position: [.75, 0],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_discover_weekly_saves',
          customStyles: { 'background-color': '#e07a5f' },
          title: 'Discover Weekly Saves',
          icons: {
            on: "mdi-help-network",
            off: "mdi-help-network"
          },
          state: false
        },
        {
          position: [1.5, 0],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_easy_on_the_ears',
          customStyles: { 'background-color': '#3d405b' },
          title: 'Easy on the ears',
          icons: {
            on: "mdi-ear-hearing",
            off: "mdi-ear-hearing"
          },
          state: false
        },
        {
          position: [2.25, 0],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_starred',
          customStyles: { 'background-color': '#81b29a' },
          title: 'Starred',
          icons: {
            on: "mdi-star",
            off: "mdi-star"
          },
          state: false
        },
        {
          position: [0, 0.75],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_funky',
          customStyles: { 'color': '#808080', 'background-color': '#f2cc8f' },
          title: 'Funky',
          icons: {
            on: "mdi-guitar-electric",
            off: "mdi-guitar-electric"
          },
          state: false
        },
        {
          position: [0.75, 0.75],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_no_isi',
          customStyles: { 'color': '#808080', 'background-color': '#f4f1de' },
          title: 'No isi',
          icons: {
            on: "mdi-check",
            off: "mdi-check"
          },
          state: false
        },
        {
          position: [1.5, 0.75],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_new_isi',
          customStyles: { 'background-color': '#e07a5f' },
          title: 'New isi',
          icons: {
            on: "mdi-check-all",
            off: "mdi-check-all"
          },
          state: false
        },
        {
          position: [2.25, 0.75],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_discoveries',
          customStyles: { 'background-color': '#3d405b' },
          title: 'Discoveries',
          icons: {
            on: "mdi-eye-outline",
            off: "mdi-eye-outline"
          },
          state: false
        },
        {
          position: [0, 1.5],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_grrif_style',
          customStyles: { 'background-color': '#81b29a' },
          title: 'Grrif Style',
          icons: {
            on: "mdi-alpha-g-circle-outline",
            off: "mdi-alpha-g-circle-outline"
          },
          state: false
        },
        {
          position: [0.75, 1.5],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_organica_deep_house',
          customStyles: { 'color': '#808080', 'background-color': '#f2cc8f' },
          title: 'Organica Deep House',
          icons: {
            on: "mdi-home-circle-outline",
            off: "mdi-home-circle-outline"
          },
          state: false
        },
        {
          position: [1.5, 1.5],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.playlist_workout',
          customStyles: { 'color': '#808080', 'background-color': '#f4f1de' },
          title: 'Workout',
          icons: {
            on: "mdi-dumbbell",
            off: "mdi-dumbbell"
          },
          state: false
        },
        {
          position: [0, 2.5],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.podcast_heute_morgen',
          bg: 'images/heute_morgen.png',
          title: 'Heute Morgen',
          state: false
        },
        {
          position: [0.75, 2.5],
          width: 0.75,
          height: 0.75,
          type: TYPES.SCRIPT,
          id: 'script.podcast_echo_der_zeit',
          bg: 'images/echo_der_zeit.png',
          title: 'Echo der Zeit',
          state: false
        }
      ]
    },
  ]
}
