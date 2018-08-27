const Discord = require ("discord.js");

exports.run = (bot, msg, args, data, errors, devs) => {
    
    let game = args.join(" ");
    bot.user.setActivity(game).catch(console.error);
    msg.delete().catch(O_o=>{});
    msg.reply(`**${game}** Configurer`);

}

module.exports.help = {
    name: "game"
  }
