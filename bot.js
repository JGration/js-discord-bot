const Discord = require ('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("McNelson 2.0 tiltar", {type: "WATCHING"})

    client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) => {
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`) 
        })
        //general id 268887144095809547
    })

    let generalChannel = client.channels.get("268887144095809547")
    //generalChannel.send("Eai lixos")
});

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    if(receivedMessage.content.startsWith("!play") || receivedMessage.content.startsWith("!!!play")){
        receivedMessage.channel.send(receivedMessage.author.toString() + " seu arrombado, tu tem que mandar essa mensagem no canal do bot!")
    }
    
});

client.login(process.env.BOT_TOKEN);
