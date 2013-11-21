'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var NebraskaGenerator = module.exports = function NebraskaGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  this.hookFor('nebraska:message', {
    args: ['Zach is a cool dude and knows how to body surf.']
  });
};

util.inherits(NebraskaGenerator, yeoman.generators.Base);

NebraskaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'containerTitle',
    message: 'What is the title?',
    default: "NebraskaJS"
  }];

  this.prompt(prompts, function (props) {
    this.containerTitle = props.containerTitle;

    cb();
  }.bind(this));
};

NebraskaGenerator.prototype.app = function app() {
  this.template('_index.html', 'index.html');
  this.template('_style.css', 'style.css');
  this.template('_app.js', 'app.js');
};
