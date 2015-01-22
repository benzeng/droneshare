Droneshare.MissionSerializer = DS.JSONSerializer.extend({
  extractArray: function(store, type, arrayPayload, id, requestType) {
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
    });
    return this._super(store, type, arrayPayload, id, requestType)
  }
});

Droneshare.MissionAdapter = DS.RESTAdapter.extend({
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return camelized;
  },

  findLive: function(store, type, sinceToken) {
    var query, host = this.get('host'),
    namespace = this.get('namespace');

    if (sinceToken) {
      query = { since: sinceToken };
    }

    return this.ajax(host + '/' + namespace + '/mission/staticMap', 'GET', { data: query });
  }
});

Droneshare.Mission = DS.Model.extend({
  isLive: DS.attr('boolean', {defaultValue: false}),
  viewPrivacy: DS.attr(),
  vehicleId: DS.attr('number'),
  maxAlt: DS.attr('number'),
  maxGroundspeed: DS.attr('number'),
  maxAirspeed: DS.attr('number'),
  maxG: DS.attr('number'),
  flightDuration: DS.attr('number'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  softwareVersion: DS.attr(),
  softwareGit: DS.attr(),
  createdOn: DS.attr('date'),
  updatedOn: DS.attr('date'),
  summaryText: DS.attr(),
  mapThumbnailURL: DS.attr(),
  viewURL: DS.attr(),
  vehicleText: DS.attr(),
  userName: DS.attr(),
  numParameters: DS.attr('number'),
  vehicleType: DS.attr()
});
