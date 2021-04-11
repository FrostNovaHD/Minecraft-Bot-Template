const bot = require("../../index.js");

bot.on("chat", async (username, message) => {
    console.log(`${username}: ${message}`);
});