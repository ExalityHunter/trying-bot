const Discord = require('discord.js');
const Listing = require('./../modules/Listing');


module.exports.run = async (bot, message, args) => {
    let snipeChannel = message.channel;
    const filter = m => !m.author.bot;
    let game = new Listing();

    let editLast3 = null;

    let startMessage = new Discord.RichEmbed()
        .setTitle("**Open Arena Custom**")
        .setColor("#fcb603")
        .setThumbnail('https://i.imgur.com/S0yevhS.png')
        .addField('**Custom Key** :', '**exality123**')
        .addField('**Gamemode** :', 'Arena Solos (EU)')
        .addField('**Rules** :', '**YOU MAY** fight your drop, if someone is contesting you, you can fight them\n**DO NOT** fight after clearing out and leaving your drop\n**DO NOT** fight until the 2nd zone has fully closed\n**DO NOT** grief, this means stealing any item at all\n**DO NOT** play like a bot, we want you to practice like this is WCn\nGame will start in **10 minutes** from this post')
        .setFooter('Made by Exality Hunter aka Ahmed En-nour');
        

    message.channel.send({embed : startMessage});
        


}


module.exports.help = {
    name : "start1"
}