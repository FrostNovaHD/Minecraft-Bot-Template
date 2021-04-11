const bot = require("../../../index.js");
const configuration = require("../../../utilities/configuration.json");

bot.on("playerJoined", async player => {
    if(bot.username === player.username) return;
    
    console.log(`${player.username} has joined the Minecraft Server (${configuration.bot.server.ip}:${configuration.bot.server.port})`);
});