const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`🤖 Online som ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ansøgning') {
    const status = interaction.options.getString('status');
    const person = interaction.options.getUser('person');
    const grund = interaction.options.getString('grund');

    await interaction.reply(`📄 **Ansøgning**
Status: **${status}**
Person: ${person}
Grund: ${grund}`);
  }
});

client.login(process.env.TOKEN);
