const transportPage = {
  title: 'Transport page',
  bg: 'images/bg3.jpg',
  icon: 'mdi-train',
  groups: [
    {
      title: 'Galgenfeld -> Bern Bahnhof (9 min)',
      width: 2,
      height: 3,
      items: [
        {
          position: [0, 0],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure',
          unit: '', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            const num = new Date(Date.parse(value));
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }        
        },
        {
          position: [0, 1],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity){
            const num = new Date(Date.parse(entity.attributes.next_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }      
        },
        {
          position: [0, 2],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity){
            const num = new Date(Date.parse(entity.attributes.next_on_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }      
        },
      ]
    },
    {
      title: 'Bern -> Fribourg',
      width: 2,
      height: 3,
      items: [
        {
          position: [0, 0],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_2',
          unit: '', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            const num = new Date(Date.parse(value));
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
        {
          position: [0, 1],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_2',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity) {
            const num = new Date(Date.parse(entity.attributes.next_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
        {
          position: [0, 2],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_2',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity) {
            const num = new Date(Date.parse(entity.attributes.next_on_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
      ]
    },
    {
      title: 'Galgenfeld -> Lausanne',
      width: 2,
      height: 3,
      items: [
        {
          position: [0, 0],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_3',
          unit: '', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            const num = new Date(Date.parse(value));
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
        {
          position: [0, 1],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_3',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity) {
            const num = new Date(Date.parse(entity.attributes.next_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
        {
          position: [0, 2],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_3',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity) {
            const num = new Date(Date.parse(entity.attributes.next_on_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
      ]
    },
    {
      title: 'Galgenfeld -> Zürich HB',
      width: 2,
      height: 3,
      items: [
        {
          position: [0, 0],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_4',
          unit: '', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            const num = new Date(Date.parse(value));
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
        {
          position: [0, 1],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_4',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity) {
            const num = new Date(Date.parse(entity.attributes.next_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
        {
          position: [0, 2],
          width: 2,
          type: TYPES.SENSOR,
          title: '',
          id: 'sensor.next_departure_4',
          unit: '', // override default entity unit
          state: false, // hidding state
          value: function (item, entity) {
            const num = new Date(Date.parse(entity.attributes.next_on_departure))
            var time = num.getHours() + ":"
            if (num.getMinutes().toString().length > 1) {
              time = time + num.getMinutes()
            } else {
              time = time + "0" + num.getMinutes()
            }
            return time;
          }
        },
      ]
    }
  ]
}
