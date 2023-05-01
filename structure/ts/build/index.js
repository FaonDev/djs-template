"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.client = new discord_js_1.Client({
    intents: []
});
exports.client.login(process.env.TOKEN);
require("./interactions");
