# Ember-cli-stringify

Convert specified files in your ember application to strings placed in your application's environment.

## Installation

`ember install ember-cli-stringify`


## Usage

In your application's `config/environment.js`, create an array of directories. The files inside these directories are what will be converted.

Example:
```
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },

    APP: {},
    stringifyDirs: ['json']
  };
```

Place the files you wish to convert inside the specified directory.
```
  app/
  config/
  json/
    |
     -- user.json
```

Example of what that `user.json` file may look like:
```
  {"username": "TayHobbs", "firstName": "Taylor", "email": "hobbstay@gmail.com"}
```

Build or serve your application.

The json file will now be in your environment, referenceable as `ENV.json.user`. It will look like:
```
  '{"username": "TayHobbs", "firstName": "Taylor", "email": "hobbstay@gmail.com"}'
```
