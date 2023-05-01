"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const __1 = require("..");
const Commands = (0, fs_1.readdirSync)(`${__dirname}/commands`).map(command => require(`./commands/${command}`));
const Events = (0, fs_1.readdirSync)(`${__dirname}/events`).map(command => require(`./events/${command}`));
for (const event of Events)
    __1.client.on(event.default.name, (...params) => event.default.execute(...params));
__1.client.on('ready', () => {
    var _a;
    (_a = __1.client.application) === null || _a === void 0 ? void 0 : _a.commands.set(Commands.map(command => command.default.data));
}).on('interactionCreate', interaction => interaction.isChatInputCommand() && Commands.find(command => command.default.data.name === interaction.commandName).default.execute(__1.client, interaction));
console.log(`Successfully loaded ${Commands.length} command(s).`);
console.log(`Successfully loaded ${Events.length} event(s).`);
