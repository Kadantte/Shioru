const { getDatabase, ref, child, get, set } = require("firebase/database");
const settingsData = require("../../extras/settingsData");
const catchError = require("../../extras/catchError");

module.exports = (channel) => {
    const client = channel.client;

    if (client.mode === "start") {
        settingsData(client, channel.guild, module.exports);
        if (client.config.worker !== 1) return;
    }

    const db = getDatabase();
    const childRef = child(ref(db, "Shioru/apps/discord/guilds"), channel.guild.id);

    get(child(childRef, "config")).then((snapshot) => {
        if (snapshot.exists()) {
            const notifyId = snapshot.val().notification.channelDelete;

            if (notifyId) {
                const notification = channel.guild.channels.cache.find(channels => channels.id === notifyId);

                if (!notification) return;

                notification.send({
                    "embeds": [
                        {
                            "title": client.translate.events.channelDelete.system_notification,
                            "description": client.translate.events.channelDelete.member_delete_channel.replace("%s", channel.name),
                            "timestamp": new Date(),
                            "color": 4886754
                        }
                    ]
                });
            }
        } else {
            set(child(childRef, "config"), {
                "prefix": "S",
                "language": "en",
                "notification": {
                    "alert": false,
                    "channelCreate": false,
                    "channelDelete": false,
                    "channelPinsUpdate": false,
                    "channelUpdate": false,
                    "emojiCreate": false,
                    "emojiDelete": false,
                    "emojiUpdate": false,
                    "guildMemberAdd": false,
                    "guildMemberRemove": false
                }
            }).then(() => {
                module.exports(client, channel);
            });
        }
    }).catch((error) => {
		catchError(client, channel, "channelDelete", error);
	});
};