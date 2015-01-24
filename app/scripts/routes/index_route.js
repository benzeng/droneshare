Droneshare.IndexRoute = Ember.Route.extend({
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      var apiConfig = Droneshare.config.api;
      var apiUrl = apiConfig.host + '/' + apiConfig.namespace;
      var rawMissions = [];
      Ember.$.ajax({
        type: 'GET',
        url: apiUrl + '/mission/staticMap',
        dataType: 'json',
        context: this,
        headers: Droneshare.config.api.headers,
        xhrFields: {
          withCredentials: true
        }
      }).then(function(arrayPayload) {
        if (arrayPayload.updates) {
          arrayPayload = arrayPayload.updates.map(function(item) {
            return item.payload;
          });
        }
        arrayPayload = arrayPayload.filter(function(item) {
          // reject invalid missions
          if (!item.latitude) {
            return false;
          }
          return true;
        })
        resolve(arrayPayload);
        return arrayPayload;
      });
    });
  },
  setupController: function(controller, arrayPayload) {
    this.controller.set('content', this.store.pushMany('mission', arrayPayload));
  }
});
