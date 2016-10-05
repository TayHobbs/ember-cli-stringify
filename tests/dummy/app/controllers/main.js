import Ember from 'ember';

import ENV from 'dummy/config/environment';

export default Ember.Controller.extend({

  env: Ember.computed(function() {
    return ENV;
  })

});
