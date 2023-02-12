import createProfile from "./createProfile.js"
export default class Profile {
    constructor(client) {
        this.client = client;
    }
    async init() {
        this.client.on('messageCreate', async(msg) => {
            if (msg.author.bot) return;
            const content = msg.content; // получаем сообщение которое написал пользователь
            const author = msg.author; // получаем пользователья который написал сообщение
            const url = `https://cdn.discordapp.com/avatars/${author.id}/${author.avatar}.png`; //получаем иконку пользователя
            if(content=="!profile"){
                const rank = msg.guild.roles.cache.get(msg.guild.members.cache.get(author.id)._roles[0]).name; // получаем ранг пользователя
                const img = await createProfile(author.username, url, rank); // создаем изображения профиля
                msg.channel.send({ files: [{ attachment: img }] }).then((e)=>{ // отправляем профиль
                    msg.delete(); // удаляем сообщение !profile
                });
            }
        });
    }
}