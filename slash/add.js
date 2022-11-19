const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'add',
  description: 'pour ajouter le bot sur ton serv',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`<:aide:1033670396492386375>  Page d'aide`)
      .setColor('#2F3136')
      .setDescription('pour m ajouter voila le lien : https://discord.com/api/oauth2/authorize?client_id=1043214833136447588&permissions=8&scope=bot%20applications.commands')
      .setTimestamp()
      .setFooter({

        text: `KG MASKI`,
        iconURL: `https://images-ext-2.discordapp.net/external/1Fg2JsC8GdbdIbzcMxWJ_PLSL8ifno-75txvAS2eSww/https/cdn.discordapp.com/avatars/1033439045994414152/a850fb7b58b39a2f3164931825016483.webp`
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}