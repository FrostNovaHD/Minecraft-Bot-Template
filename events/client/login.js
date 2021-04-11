const bot = require("../../index.js");
const configuration = require("../../utilities/configuration.json");

bot.on("login", async () => {
    console.log(`The Minecraft Bot is online on the Minecraft Server (${configuration.bot.server.ip}:${configuration.bot.server.port})`);
});