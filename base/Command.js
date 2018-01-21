class Command {
  constructor(client, {
    name = null,
    description = 'No description provided.',
    category = 'General',
    usage = 'No usage provided.',
    extended = 'No information provided.',
    guildOnly = true,
    aliases = [],
    permLevel = 'User',
    location = ''
  }) {
    this.client = client;
    this.help = {
      name,
      description,
      category,
      usage,
      extended
    };
    this.conf = {
      guildOnly,
      aliases,
      permLevel,
      location
    };
  }
  
  async run(message, args, level) { // eslint-disable-line no-unused-vars
    message.error(new Error(`Command ${this.constructor.name} doesn't provide a run method.`)); 
  }
}
module.exports = Command;