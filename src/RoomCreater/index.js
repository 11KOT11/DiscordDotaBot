import { ChannelType, PermissionsBitField } from 'discord.js';

export default class RoomCreate {
    constructor(client) {
        this.client = client;
    }
    async init() {
        this.client.on('voiceStateUpdate', async (oldMember, newMember) => {
            if (
                !oldMember.channel &&
                newMember.channelId == "1072802028092407858"
            ) {
                this.connect(newMember);
            }
            if (
                !newMember.channel &&
                oldMember.channelId != "1072802028092407858" &&
                oldMember.channelId != "1073235949074526219"
            ) {
                this.disconnect(oldMember);
            }
        })
    }
    async connect(newMember) {
        const rootRoom = await this.client.channels.cache.get('1073235949074526219');
        const user = (await newMember.guild.members.fetch(newMember.id));
        newMember.guild.channels.create({
            name: user.user.username,
            type: ChannelType.GuildVoice,
            parent: rootRoom.parent,
            permissionOverwrites: [
                {
                    id: newMember.id,
                    allow: [PermissionsBitField.Flags.ViewChannel],
                },
            ],
        }).then((e) => {
            e.setUserLimit(5)
            user.voice.setChannel(e.id)
        });
    }
    async disconnect(oldMember) {
        const findChannel = await oldMember.guild.channels.cache.get(oldMember.channelId);
        if (findChannel?.members?.size == 0) { // если в канале 0 участников
            findChannel.delete().catch((e) => { console.log('!!! ' + newMember.id + ' Неправильно удалил войс !!!'); });
        }
    }
}