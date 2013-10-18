var config = require('./config.global');

config.HOST = 'localhost/';

config.PORT.HTTP = '8080'

// paths, relative to this location
config.PUBLIC_PATH = __dirname + '/../../client';

module.exports = config;