const transportPage = {
  title: 'Transport page',
  bg: 'images/bg2.png',
  icon: 'mdi-train',
  groups: [
    {
      title: '',
      width: 3,
      height: 4,
      items: [
        {
          position: [0, 0],
          width: 4,
          type: TYPES.SENSOR,
          title: 'Bern Bahnhof',
          id: 'sensor.next_departure',
          unit: '', // override default entity unit
          state: false, // hidding state
          filter: function (value) { // optional
            const num = new Date(Date.parse(value));
            const time = num.getHours() + ":" + num.getMinutes();
            return time;
          }        
        }
      ]
    }
  ]
}
