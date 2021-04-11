const bot = require("../../index.js");
const configuration = require("../../utilities/configuration.json");
const cooldown = new Map();

bot.on("chat", async (username, message) => {
    let prefix = configuration.command.prefix;
    let args = message.slice(prefix.length).trim().split(/ +/);
    let command = args.shift().toLowerCase();
    let commandFile;

    if(!message.startsWith(prefix)) return;
    if(command.length === 0) return;

    if(bot.commands.has(command)) {
        commandFile = bot.commands.get(command);
    } else if(bot.aliases.has(command)) {
        commandFile = bot.commands.get(bot.aliases.get(command));
    };

    if(commandFile) {
        if(commandFile.configuration.cooldown && commandFile.configuration.cooldown.length !== 0) {
            if(!cooldown.has(commandFile.configuration.name)) {
                cooldown.set(commandFile.configuration.name, new Map());
            };

            if(cooldown.get(commandFile.configuration.name).has(username)) {
                return bot.chat(`${username}, you currently have a cooldown on this command, please try again later!`);
            } else {
                cooldown.get(commandFile.configuration.name).set(username);
                
                setTimeout(() => {
                    cooldown.get(commandFile.configuration.name).delete(username);
                }, commandFile.configuration.cooldown || 3000);
            };
        };

        commandFile.run(bot, username, message, args);
    };
});