require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

client.on("ready", (c) => {
	console.log(`🖤 ${c.user.tag} ta listo :3`);
});

// client.on("messageCreate", (msg) => {
// 	if (msg.author.bot) {
// 		return;
// 	}

// 	if (msg.content === "hiii") {
// 		msg.reply("u are a femboy OwO?!?!");
// 	}
// });

// client.on("messageCreate", (msg) => {
// 	if (msg.author.bot) {
// 		return;
// 	}

// 	if (msg.content === "seita" || "Seita") {
// 		msg.reply("seita es femboy xdd");
// 	}
// });

client.on("interactionCreate", (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	if (interaction.commandName === "add") {
		const num1 = interaction.options.get("first-number").value;
		const num2 = interaction.options.get("second-number").value;

		interaction.reply(`The sum is ${num1 + num2}`);
	}
});

client.login(process.env.TOKEN);
