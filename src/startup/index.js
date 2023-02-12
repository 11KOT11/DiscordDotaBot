import { ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, EmbedBuilder } from 'discord.js';

export default class StartUp {
    constructor(client) {
        this.client = client
    }
    init() {
        const channel = this.client.channels.cache.get('1073496955898048512');
        // channel.send({ components: [this.createSelect()], embeds: [this.createEmbed()] })
    }
    createSelect() {
        return new ActionRowBuilder()
            .addComponents(
                new StringSelectMenuBuilder()
                    .setCustomId('select')
                    .setPlaceholder('Выбор роли')
                    .addOptions(
                        { label: "Рекрут", emoji: "<:Herald:1073489437645873192>", description: "0-650mmr", value: "setRole Herald" },
                        { label: "Страж", emoji: "<:Guardian:1073489434877644800>", description: "780-1430mmr", value: "setRole Guardian" },
                        { label: "Рыцарь", emoji: "<:Crusader:1073489430553301032>", description: "1560-2240mmr", value: "setRole Crusader" },
                        { label: "Герой", emoji: "<:Archon:1073489428938498078>", description: "2370-3020mmr", value: "setRole Archon" },
                        { label: "Легенда", emoji: "<:Legend:1073489442221867068>", description: "3150-3800mmr", value: "setRole Legend" },
                        { label: "Властелин", emoji: "<:Ancient:1073489425419485246>", description: "3930-4580mmr", value: "setRole Ancient" },
                        { label: "Божество", emoji: "<:Divine:1073489433262817320>", description: "4710-5360mmr", value: "setRole Divine" },
                        { label: "Титан", emoji: "<:Immortal:1073489439273259070>", description: "5780+ mmr", value: "setRole Immortal" },
                    ),
            );
    }
    createEmbed() {
        return new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Авто выбор роли на сервере [абобус]')
            .setAuthor({ name: 'КОММАНДА НА ИНТ', iconURL: 'https://i.ibb.co/MGP2B88/ea89514443ff0571ac8e627c9f7e7e19.png' })
            .setDescription('V Выберите ваше звание в меню снизу V')
            .setThumbnail('https://i.ibb.co/MGP2B88/ea89514443ff0571ac8e627c9f7e7e19.png')
    }
}