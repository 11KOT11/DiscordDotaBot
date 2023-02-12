import { ChannelType, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
export default class interactionCreate {
    constructor(client) {
        this.client = client;
        this.allRole = [
            { Herald: '1073221984437145640' },
            { Guardian: '1073222438390861915' },
            { Crusader: '1073222653374115840' },
            { Archon: '1073223595955863655' },
            { Legend: '1073223862071869440' },
            { Ancient: '1073224098030829569' },
            { Divine: '1073224224874971197' },
            { Immortal: '1073498902193520650' },
        ];
    }
    async init() {
        this.client.on('interactionCreate', async (interaction) => {
            if (!interaction.isStringSelectMenu()) return;
            const values = interaction.values[0].split(" ");
            const RoleId = Object.values(this.allRole.find(e => Object.keys(e) == values[1]))[0];
            const user = interaction.guild.members.cache.get(interaction.user.id);
            var role = interaction.guild.roles.cache.get(RoleId)
            if (values[0] == "setRole") {
                var role = interaction.guild.roles.cache.get(RoleId) // получаем роль которая нам нужна
                this.clearUserRole(user, RoleId); // чистим роли
                user.roles.add(role); // выдаем роль
                interaction.reply({ content: `Роль ${role.name} успешно выдана!`, ephemeral: true }); // отправляем сообщение об успехе
            }
        });
    }
    clearUserRole(user, needId) { // удаляем лишние роли у пользователя
        this.allRole.map((role) => { // проходимя по всем ролям
            const findRole = user.roles.cache.find(e => e.id == Object.values(role));
            if (findRole?.id != needId && findRole) user.roles.remove(findRole) // если найдена роль которую нужно удалить
        })
    }
}