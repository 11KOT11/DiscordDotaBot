import { Client } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();
const client = new Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates', 'GuildMembers'] });

import RoomCreator from "./RoomCreater/index.js";
import Statistic from './Statistic/index.js';
import startMessage from "./startup/index.js";
import Profile from './Profile/index.js';
import Role from "./Role/index.js";

client.on('ready', () => {
    console.log(`Бот запустился под именем: ${client.user.tag}!`);
    const initList = [new RoomCreator(client), new Statistic(client), new startMessage(client), new Role(client), new Profile(client)];
    initList.map((e) => {
        e.init()
    })

});



client.login(process.env.TOKEN);