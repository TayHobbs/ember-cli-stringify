/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

var stringifiedFiles = {};

module.exports = {
  name: 'ember-cli-stringify',

  preBuild: function() {
    var app_config = this.app.project.config(this.app.env)['stringifyDirs'] || [];
    for (var d = 0; d < app_config.length; d++) {
      var dir = app_config[d];
      var name = dir.split('/')[dir.split('/').length - 1];
      if (!stringifiedFiles[name]) {
        stringifiedFiles[name] = {};
      }
      var templates = fs.readdirSync(path.join(process.cwd(), dir));
      for (var i = 0;  i < templates.length; i++) {
        stringifiedFiles[name][templates[i].replace(/\.[^.]+$/g, '')] = fs.readFileSync(path.join(process.cwd(), dir, templates[i])).toString().replace(/(?:\r\n|\r|\n)/g, '');
      }

    }
  },

  config: function() {
    return stringifiedFiles;
  }
};
