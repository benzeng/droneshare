Ember.Application.initializer({
  name: 'hull',
  before: 'simple-auth',

  initialize: function(container, application) {
    Hull.readyToGo = false;
  }
});
