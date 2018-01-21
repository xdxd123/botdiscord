module.exports = class {

  static run(client, message, level) {
    this.linting = require('./linting.js').run(client, message, level),
    this.everyone = require('./everyone.js').run(client, message, level);
  }
};
