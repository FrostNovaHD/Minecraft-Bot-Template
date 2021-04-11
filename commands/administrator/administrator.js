const configuration = require("../../utilities/configuration.json");

module.exports.run = async (bot, username, message, args) => {
    if(!configuration.command.permissions.administrators.includes(username)) return bot.chat(`${username}, you don't have permission to use this command!`);

    bot.chat(`${username}, You have successfully ran the administrator test command!`);
};

module.exports.configuration = {
    name: "administrator",
    aliases: ["admin"],
    cooldown: 3000
};