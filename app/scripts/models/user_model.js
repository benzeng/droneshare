Droneshare.UserSerializer = DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    vehicles: { embedded: 'always' }
  }
});

Droneshare.UserAdapter = DS.RESTAdapter.extend({
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return camelized;
  }
});

Droneshare.User = DS.Model.extend({
  login: DS.attr(),
  fullName: DS.attr(),
  isAdmin: DS.attr('boolean'),
  avatarImage: DS.attr(),
  profileUrl: DS.attr(),
  emailVerified: DS.attr('boolean', {default: false}),
  needNewPassword: DS.attr('boolean', {default: false}),
  defaultViewPrivacy: DS.attr(),
  defaultControlPrivacy: DS.attr(),
  vehicles: DS.hasMany('vehicle'),
  hullId: DS.attr()
});
