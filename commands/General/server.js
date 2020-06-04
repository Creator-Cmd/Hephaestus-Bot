const Discord = require('discord.js');
var maintenance = false;
colours = require('../../colours.json');
const parent = require('../../bot.js');
module.exports = {
	name: 'server',
	description: 'Displays server information',
	execute(message, args) {
    const sembed = new Discord.MessageEmbed()
        .setTitle('Server Information')
        .setThumbnail(message.guild.iconURL())
        .setDescription(`Information on ${message.guild.name}`)
        .setColor(colours.cyan)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL())
        .addField(`**Guild Name**`, `${message.guild.name}`, true)
        .addField(`**Guild Owner**`, `${message.guild.owner}`, true)
        .addField(`**Member Count**`, `${message.guild.memberCount}`, true)
        .addField(`**Role Count**`, `${message.guild.roles.size}`, true)
        .addField(`**Region**`, `${message.guild.region}`, true)
        .addField(`**Server Creation**`, `${message.guild.createdAt}`, true)
        .setFooter(`Hephaestus | Footer`, parent.client.user.displayAvatarURL());
        message.channel.send(sembed);
	}   
};
