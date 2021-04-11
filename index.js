const mineflayer = require("mineflayer");
const configuration = require("./utilities/configuration.json");

let options = {
    username: configuration.bot.account.email,
    password: configuration.bot.account.password,
    host: configuration.bot.server.ip,
    port: configuration.bot.server.port,
    version: configuration.bot.minecraft.version,
    auth: configuration.bot.minecraft.authenticator
};

function createBot() {
    let bot = mineflayer.createBot(options);
    bot.createBot = createBot;
    module.exports = bot;

    delete require.cache[require.resolve("./handlers.js")];
    
    const handlers = require("./handlers.js");
    
    handlers.loadCommands();
    handlers.loadEvents();
};

createBot();