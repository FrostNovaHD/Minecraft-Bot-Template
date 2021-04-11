const bot = require("../../../index.js");
const configuration = require("../../../utilities/configuration.json");

bot.on("playerLeft", async player => {
    if(bot.username === player.username) return;
    
    console.log(`${player.username} has left the Minecraft Server (${configuration.bot.server.ip}:${configuration.bot.server.port})`);
});