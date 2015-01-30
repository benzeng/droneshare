Droneshare.VehicleSerializer = DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    missions: { embedded: 'always' }
  },
  extractSingle: function(store, type, payload, id, requestType) {
    //payload.user = payload.userName;
    delete payload.userName;
    return this._super(store, type, payload, id, requestType);
  }
});

Droneshare.VehicleAdapter = DS.RESTAdapter.extend({
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return camelized;
  }
});

Droneshare.Vehicle = DS.Model.extend({
  uuid: DS.attr(),
  name: DS.attr(),
  //userId: DS.attr('number'),
  //user: DS.belongsTo('user', { async: true }),
  manufacturer: DS.attr(),
  vehicleType: DS.attr('string', {defaultValue: ''}),
  autopilotType: DS.attr('string', {defaultValue: ''}),
  viewPrivacy: DS.attr(),
  controlPrivacy: DS.attr(),
  missions: DS.hasMany('mission'),
  createdOn: DS.attr('date'),
  updatedOn: DS.attr('date'),
  summaryText: DS.attr()
});
