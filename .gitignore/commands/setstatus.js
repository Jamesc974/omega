const Discord = require ("discord.js");

exports.run = (bot, msg, args) => {

    let st = args.join(" ");
    bot.user.setStatus(st)
    msg.delete().catch(O_o=>{});
    msg.reply(`**${st}** Configurer`);

}

module.exports.help = {
    name: "setstatus"
}
