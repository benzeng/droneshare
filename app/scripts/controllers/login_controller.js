Droneshare.LoginController = Ember.Controller.extend(SimpleAuth.AuthenticationControllerMixin, {
  authenticator: 'authenticator:hull',
  actions: {
    authenticate: function() {
      var data = this.getProperties('login', 'password');
      this.set('password', null);
      return this._super(data);
    }
  }
});
