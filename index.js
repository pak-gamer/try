const Discord=require('discord.js');
const bot=new Discord.client()
bot.on('ready',()=>{
console.log("bot is online");
bot.user.setActivity(`Say ??help`, { type: `WATCHING` });
})

bot.on('message', message=>{
if(message.auther.bot){return;}
if(message.content=="$upvote"){
    message.reply("This feature is not yet avilable");
}
})
bot.login(process.env.token);
