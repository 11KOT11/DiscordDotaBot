export default class Statistic {
    constructor(client) {
        this.client = client
    }
    init() {
        // this.animated(); // включаем анимацию
        setInterval(() => {
            const guild = this.client.guilds.cache.get("1072418723501187102");
            const onlineChannel = guild.channels.cache.get("1073233371527925932");
            onlineChannel.setName(`🙎Онлайн: ${guild.members.cache.size}🙎`);
        }, 10000);
    }
    // animated() {
    //     let animatedList = [
    //         "1000000001",
    //         "0100000010",
    //         "0010000100",
    //         "0001001000",
    //         "0000110000",
    //         "0001001000",
    //         "0010000100",
    //         "0100000010",
    //     ];
    //     let index = 0;
    //     let type = 1;
    //     setInterval(() => {
    //         if (index == animatedList.length - 1) type = -1;
    //         if (index == 0) type = 1;
    //         index += type;
    //         this.setAnimatedLabel(animatedList[index])
    //     }, 1000)
    // }
    // setAnimatedLabel(text) {
    //     console.log(text);
    //     const guild = this.client.guilds.cache.get("1072418723501187102");
    //     const animated1 = guild.channels.cache.get("1073237992505888809");
    //     // const animated2 = guild.channels.cache.get("1073237992505888809");
    //     animated1.setName(text);
    //     // animated2.setName(text);
    // }
}