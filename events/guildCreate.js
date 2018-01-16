module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async execute(guild) {
    if (!guild.available) return;
  }
};