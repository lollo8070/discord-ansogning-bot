const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const commands = [
  new SlashCommandBuilder()
    .setName('ansøgning')
    .setDescription('Godkend eller afvis ansøgning')
    .addStringOption(option =>
      option.setName('status')
        .setDescription('Godkend eller Afvist')
        .setRequired(true)
        .addChoices(
          { name: 'Godkend', value: 'Godkend' },
          { name: 'Afvist', value: 'Afvist' }
        )
    )
    .addUserOption(option =>
      option.setName('person')
        .setDescription('Personen')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('grund')
        .setDescription('Grund')
        .setRequired(true)
    )
].map(cmd => cmd.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  await rest.put(
    Routes.applicationCommands(process.env.CLIENT_ID),
    { body: commands }
  );
  console.log('✅ Slash command registreret');
})();
