const discord = require("discord.js");
const firebase = require("firebase");
const package = require("./package.json");
const config = require("./config");

// Show when bots start working To check that bots do not have a problem
console.log("\x1b[31m-------------------------------------------------------------");
console.log("\x1b[33m(C)2020 LectionDev - bot general commands. rights reserved.");
console.group("\x1b[31m-------------------------------------------------------------\x1b[0m");

const client = new discord.Client({
    "disableEveryone": false,
    "partials": ["MESSAGE", "CHANNEL", "REACTION"]
});

client.config = config;

["command", "event"].forEach(dirs => require("./handlers/" + dirs)(client));

// Check package version
console.log("\u001b[1mpackage\u001b[0m version: " + package.version);
console.log("\u001b[1mdiscord.js\u001b[0m version: " + discord.version);
console.log("\u001b[1mnode.js\u001b[0m version: " + process.version);

firebase.initializeApp(client.config.firebase);
client.login(client.config.token);