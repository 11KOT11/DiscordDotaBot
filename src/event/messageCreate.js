export default class messageCreate {
    constructor(client) {
        this.client = client;
    }
    async init() {
        // this.client.on('messageCreate', (msg) => {
        //     if (msg.author.bot) return;
        //     const content = msg.content;
        //     console.log(msg.author);
        //     console.log(content);
        // });
    }
}