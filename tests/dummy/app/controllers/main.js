import Ember from 'ember';

import ENV from 'dummy/config/environment';

export default Ember.Controller.extend({

  env: Ember.computed(function() {
    return ENV;
  }),

  user: Ember.computed(function() {
    return JSON.parse(ENV.json.user);
  }),

  comment: Ember.computed(function() {
    return Ember.String.htmlSafe(ENV.templates.comment);
  })

});
