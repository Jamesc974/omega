const Discord = require ("discord.js")

module.exports.run = async (bot, message, args) => {
        let iconm = message.author.avatarURL;
        let iconb = bot.user.avatarURL;
        let helpembed = new Discord.RichEmbed()
        .setAuthor("Demande du lien du site - RainOfDeath-", iconb)
        .setDescription(`Voici le lien du site web de la Rain of death`)
        .setThumbnail(iconb)
        .addField("Lien¬", '[Rejoindre](https://rainofdeathfr.wixsite.com/rainofdeath)', true)
        .addField("Créateur¬", '`TarKyo 👔`', true)
        .setColor("#bc0000")
        .setTimestamp()
        .setFooter(`par ${message.author.tag}`, iconm)
        let helpembed2 = new Discord.RichEmbed()
        .setAuthor(`📍 Un message contenant le lien vous a été envoyé !`, iconm)
        .setColor("#8904B1");

        try{
            await message.author.send(helpembed);
            message.delete().catch(O_o=>{});
            message.channel.sendMessage(helpembed2).then(msg => msg.delete(5000));
        }catch(e){
            message.reply("Vos message privé sont verrouillés. Je ne peux pas vous envoyer les commandes.").then(msg => msg.delete(5000));
        }

}



    module.exports.help = {
        name: "site"
    }
