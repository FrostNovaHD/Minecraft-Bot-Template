module.exports.run = async (bot, username, message, args) => {
    bot.chat(`${username}, You have successfully ran the test command!`);
};

module.exports.configuration = {
    name: "test",
    aliases: ["testing"],
    cooldown: 3000
};