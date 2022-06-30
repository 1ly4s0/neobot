const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) 
    {
    
    const embed = new Discord.MessageEmbed()
    .setTitle("MÚSICA")
    .setDescription(` <@${message.author.id}> Debes estar en un canal de voz para usar este comando`)
    .setThumbnail("https://cdn.discordapp.com/attachments/848130595560357918/888737569263714344/descarga.png")
    .setImage("https://media.discordapp.net/attachments/766474929641488425/802544350004641813/BARRA.gif")
    .setColor(0x66b3ff)   
message.channel.send(embed);
    };
    
    const music = args.join(" ");

    bot.distube.play(message, music)
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
