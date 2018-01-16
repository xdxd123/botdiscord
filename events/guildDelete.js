module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async execute(guild) {
    this.client.settings.delete(guild.id);
  }
};