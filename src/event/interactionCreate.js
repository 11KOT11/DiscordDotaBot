import { ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
export default class interactionCreate {
    constructor(client) {
        this.client = client;
    }
    async init() {
        // this.client.on('interactionCreate', async (data) => {
        //     const { id, username } = data.user;
        //     const { customId, guild } = data;
        //     const rootRoom = await this.client.channels.cache.get('1072802028092407858');
        //     console.log(rootRoom.members);
        //     // console.log(await guild.channels[0]);
        //     // const userInVoice = rootRoom.members.find((e) => { if (e.user.id == id) return e; });
        //     // console.log(userInVoice);
        //     //if(userInVoice)
        //     const row = new ActionRowBuilder()
        //     .addComponents(
        //         new ButtonBuilder()
        //             .setCustomId('DuoRoom')
        //             .setLabel('2')
        //             .setStyle(ButtonStyle.Secondary),
        //     )
        //     .addComponents(
        //         new ButtonBuilder()
        //             .setCustomId('TrioRoom')
        //             .setLabel('3')
        //             .setStyle(ButtonStyle.Success),
        //     )
        //     .addComponents(
        //         new ButtonBuilder()
        //             .setCustomId('FullRoom')
        //             .setLabel('5')
        //             .setStyle(ButtonStyle.Danger),
        //     )
        //     const user = await this.client.users.fetch(id);
        //     user.send({ content: 'С помошью это бота вы можете\nСоздать руму для своей тимы', components: [row] })
        //     //console.log(data);
        //     // const channel = await guild.channels.create({
        //     //     name: username + " " + customId,
        //     //     type: ChannelType.GuildVoice,
        //     //     parent: rootRoom.parent,
        //     // }).then((e) => {
        //     //     if (customId == "DuoRoom") e.setUserLimit(2);
        //     //     if (customId == "TrioRoom") e.setUserLimit(3);
        //     //     if (customId == "FullRoom") e.setUserLimit(5);
        //     // });
        //     // data.reply({ content: `${customId} успешно создана!`, ephemeral: true })
        // });
    }
}