const bot = require("../../index.js");

bot.on("kicked", async reason => {
    console.log(reason);
});