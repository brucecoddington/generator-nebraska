'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var MessageGenerator = module.exports = function MessageGenerator(args, options, config) {
  yeoman.generators.NamedBase.apply(this, arguments);
};

util.inherits(MessageGenerator, yeoman.generators.NamedBase);

MessageGenerator.prototype.files = function files() {
  var messageFunction = '\ncreateSaying(\'' + this.name + '\'); \n';
  fs.appendFile('app.js', messageFunction, function (err) {
    if (!err) {
      console.log('Added message to app.js');
    }
  });
};
