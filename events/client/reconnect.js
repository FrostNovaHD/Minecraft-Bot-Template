const bot = require("../../index.js");
const configuration = require("../../utilities/configuration.json");

bot.on("end", async () => {
    if(configuration.reconnect.enabled) {
        console.log(`The Minecraft Bot is reconnecting to the Minecraft Server (${configuration.bot.server.ip}:${configuration.bot.server.port}) in ${(configuration.reconnect.timeout || 30000) / 1000} seconds.`);
        
        setTimeout(() => {
            bot.createBot();
        }, configuration.reconnect.timeout || 30000);
    };
});