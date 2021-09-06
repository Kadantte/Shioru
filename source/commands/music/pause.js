module.exports.run = function (client, message, args) {
    let queue = client.music.getQueue(message);

    if (!queue) return message.channel.send(client.translate.commands.pause.no_queue);
    if (message.author.id !== queue.songs[0].user.id) return message.reply(client.translate.commands.pause.not_owner);
    if (!queue.paused) return message.reply(client.translate.commands.pause.not_paused);

    client.music.pause(message);
    message.channel.send(client.translate.commands.pause.paused);
};

module.exports.help = {
    "name": "pause",
    "description": "Pause music",
    "usage": "pause",
    "category": "music",
    "aliases": ["pu", "หยุดชั่วคราว"],
    "permissions": ["SEND_MESSAGES", "CONNECT"]
};