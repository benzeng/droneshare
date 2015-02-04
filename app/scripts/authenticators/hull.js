Droneshare.HullAuthenticator = SimpleAuth.Authenticators.Base.extend({
  restore: function(data, reject) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var apiConfig = Droneshare.config.api;
      var apiUrl = apiConfig.host + '/' + apiConfig.namespace;
      Ember.$.ajax({
        type: 'GET',
        url: apiUrl + '/auth/user',
        dataType: 'json',
        context: this,
        headers: Droneshare.config.api.headers,
        xhrFields: {
          withCredentials: true
        }
      }).done(function(objectPayload) {
        Ember.run(function(){
          resolve(objectPayload);
        });
      }).fail(function(xhr, textStatus, errorThrown) {
        Ember.run(function(){
          reject(errorThrown);
        });
      });
    });
  },

  authenticate: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var apiConfig = Droneshare.config.api;
      var apiUrl = apiConfig.host + '/' + apiConfig.namespace;
      var data = options;
      Ember.$.ajax({
        type: 'POST',
        url: apiUrl + '/auth/login',
        dataType: 'json',
        context: this,
        crossdomain: true,
        headers: Droneshare.config.api.headers,
        data: data,
        xhrFields: {
          withCredentials: true
        }
      }).done(function(objectPayload) {
        Ember.run(function(){
          resolve(objectPayload);
        });
      }).fail(function(xhr, textStatus, errorThrown) {
        Ember.run(function(){
          reject(errorThrown);
        });
      });
    })
  },

  invalidate: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var apiConfig = Droneshare.config.api;
      var apiUrl = apiConfig.host + '/' + apiConfig.namespace;
      Ember.$.ajax({
        type: 'POST',
        url: apiUrl + '/auth/logout',
        dataType: 'json',
        context: this,
        crossdomain: true,
        headers: Droneshare.config.api.headers,
        data: {},
        xhrFields: {
          withCredentials: true
        }
      }).then(function(objectPayload) {
        Ember.run(function(){
          resolve(objectPayload);
        });
      });
    });
  }
});
