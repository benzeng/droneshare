Droneshare.HullSession = SimpleAuth.Session.extend({
  user: function() {
    debugger;
    var userObject = this.get('content');
    if (!Ember.isEmpty(userObject)) {

      return this.store.push('user', userObject);
    }
  }.property()
});
