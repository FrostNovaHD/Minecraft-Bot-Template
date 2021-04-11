const bot = require("../../index.js");

bot.on("error", async error => {
    console.log(error);
});