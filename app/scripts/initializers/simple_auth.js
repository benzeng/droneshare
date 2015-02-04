Ember.Application.initializer({
  name: 'authentication',
  before: 'simple-auth',

  initialize: function(container, application) {
    container.register('authenticator:hull', Droneshare.HullAuthenticator);
    container.register('session:hull', Droneshare.HullSession);
  }
});

Ember.Application.initializer({
  name: 'post-authentication',
  after: 'simple-auth',

  initialize: function(container, application) {
    var applicationRoute = container.lookup('route:application');
    var session = container.lookup('session:hull');

    session.on('sessionAuthenticationSucceeded', function() {
      Ember.Logger.debug('Session authentication succesful!');
    });
    session.on('sessionAuthenticationFailed', function() {
      Ember.Logger.debug('Session authentication failed!');
    });
    session.on('sessionInvalidationSucceeded', function() {
      applicationRoute.transitionTo('index');
    });
    session.on('sessionInvalidationFailed', function() {
      Ember.Logger.debug('Session invalidation failed!');
    });

  }
});

