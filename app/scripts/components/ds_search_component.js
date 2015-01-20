Droneshare.DsSearchComponent = Ember.Component.extend({
  missions: [],
  firstMissions: function() {
    return this.get('missions').slice(0, 3);
  }.property('missions'),
  didInsertElement: function() {
  }
});
