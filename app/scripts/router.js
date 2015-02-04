Droneshare.Router.reopen({
  //location: 'history'
}).map(function () {
  //this.resource('mission', { path: '/mission/:mission_id' });
  //this.resource('user', { path: '/user/:user_id' });
  //this.resource('vehicle', { path: '/vehicle/:vehicle_id' });
  this.route('login');
});
