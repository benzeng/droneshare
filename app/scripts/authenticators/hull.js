Droneshare.HullAuthenticator = SimpleAuth.Authenticators.Base.extend({
  restore: function(data) {
  },
  authenticate: function(options) {
  },
  invalidate: function(data) {
  }
});

Ember.Application.initializer({
  name: 'authentication',
  before: 'simple-auth',

  initialize: function(container, application) {
    container.register('authenticator:custom', Droneshare.HullAuthenticator);
  }
});
