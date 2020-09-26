const irrigationPage = {
    title: 'Irrigation page',
    bg: 'images/bg_plants.jpeg',
    icon: 'mdi-flower',
    groups: [
      {
        title: 'Balcony North',
        width: 2,
        height: 4,
        items: [
          {
            position: [0, 0],
            width: 2,
            height: 2,
            title: 'Irrigation North',
            type: TYPES.SWITCH,
            id: 'switch.irrigation_balcony_north',
            title: 'Balcony North',
            states: {
                on: "On",
                off: "Off"
            },
   	    icons: {
      		on: "mdi-water-pump",
      		off: "mdi-water-pump-off",
   	    }
            // customStyles: { 'background-color': '#e63946' }
          },
        ]
      },
    ]
  }
