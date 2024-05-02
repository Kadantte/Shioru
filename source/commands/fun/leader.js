const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  Colors,
} = require('discord.js')
const { fetchLevel } = require('../../utils/databaseUtils')

module.exports = {
  permissions: [PermissionFlagsBits.SendMessages],
  data: new SlashCommandBuilder()
    .setName('leader')
    .setDescription('View the ranking on this server.')
    .setDescriptionLocalizations({
      th: 'ดูการจัดอันดับบนเซิร์ฟเวอร์นี้',
    })
    .setDefaultMemberPermissions()
    .setDMPermission(false)
    .addSubcommand((subcommand) =>
      subcommand
        .setName('level')
        .setDescription(
          'See the ranking of people with the most EXP and Level on the server.'
        )
        .setDescriptionLocalizations({
          th: 'ดูการจัดอันดับของผู้ที่มี EXP และเลเวลมากที่สุดบนเซิร์ฟเวอร์',
        })
    ),
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand()

    switch (subcommand) {
      case 'level': {
        const max = 10
        const leader = []
        const data = await fetchLevel(
          interaction.client,
          interaction,
          'GET/ALL'
        )
        const status = data.status
        const users = data.users

        if (status !== 'success')
          return await interaction.reply(
            interaction.client.i18n.t('commands.leader.no_info')
          )

        users.forEach((user) => {
          const id = user.id
          const data = user.data()
          const member = interaction.guild.members.cache.find(
            (member) => member.id === id
          )

          if (member) {
            if (!member.user.bot) {
              const leveling = data.leveling

              if (leveling) {
                const exp = leveling.exp
                const level = leveling.level

                leader.push({
                  data: {
                    exp: exp,
                    level: level,
                    avatar: member.user.displayAvatarURL(),
                  },
                  name: member.user.username,
                  value: interaction.client.i18n
                    .t('commands.leader.leveling_detail')
                    .replace('%s1', exp)
                    .replace('%s2', level),
                })
              }
            }
          }
        })

        leader.sort(
          (first, next) =>
            next.data.level - first.data.level || next.data.exp - first.data.exp
        )

        // Create embed fields data
        for (let i = 0; i < leader.length; i++) {
          if (!leader[i]) return
          if (i === max) return

          delete leader[i].data
          leader[i].name = `${i + 1}. ${leader[i].name}`
        }

        const clientAvatar = interaction.client.user.displayAvatarURL()
        const clientUsername = interaction.client.user.username
        const userAvatar = leader[0].data.avatar
        const embed = new EmbedBuilder()
          .setColor(Colors.Blue)
          .setAuthor({ name: clientUsername, iconURL: clientAvatar })
          .setTitle(interaction.client.i18n.t('commands.leader.server_rank'))
          .setDescription(
            interaction.client.i18n.t('commands.leader.server_rank_description')
          )
          .setThumbnail(userAvatar)
          .addFields(leader)
          .setFooter({
            text: interaction.client.i18n.t('commands.leader.server_rank_tips'),
          })
          .setTimestamp()

        await interaction.reply({ embeds: [embed] })
        break
      }
    }
  },
}
