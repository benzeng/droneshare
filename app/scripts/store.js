// API Adapter

DS.RESTAdapter.reopen({
  namespace: 'api/v1',
  host: 'http://api.droneshare.com',
  headers: {
    "Authorization": 'DroneApi apikey="eb34bd67.megadroneshare"'
  }
});
