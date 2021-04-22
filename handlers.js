const bot = require("./index.js");
const fs = require("fs");
const path = require("path");

bot.commands = new Map();
bot.aliases = new Map();

function loadCommands(directory = "./commands/") {
    fs.readdirSync(directory).forEach(async result => {
        let directoryPath = path.resolve(directory, result);
        let directoryCheck = await fs.statSync(directoryPath).isDirectory();
        
        if(directoryCheck) {
            loadCommands(directoryPath);
        } else {
            delete require.cache[require.resolve(directoryPath)];
            
            let fileName = path.basename(directoryPath);
            let command = require(directoryPath);

            bot.commands.set(command.configuration.name, command);
            if(command.configuration.aliases) return command.configuration.aliases.forEach(alias => bot.aliases.set(alias, command.configuration.name));

            if(process.uptime() < 5) {
                console.log(`${fileName} loaded (command)`);
            };
        };
    });
};

function loadEvents(directory = "./events/") {
    fs.readdirSync(directory).forEach(async result => {
        let directoryPath = path.resolve(directory, result);
        let directoryCheck = await fs.statSync(directoryPath).isDirectory();

        if(directoryCheck) {
            loadEvents(directoryPath);
        } else {
            delete require.cache[require.resolve(directoryPath)];

            let fileName = path.basename(directoryPath);

            require(directoryPath);

            if(process.uptime() < 5) {
                console.log(`${fileName} loaded (event)`);
            };
        };
    });
};

module.exports = {
    loadCommands: loadCommands,
    loadEvents: loadEvents
};