const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");
require("dotenv").config();

const commands = [
	{
		name: "add",
		description: "Adds two numbers",
		options: [
			{
				name: "first-number",
				description: "The first number.",
				type: ApplicationCommandOptionType.Number,
				choices: [
					{
						name: "one",
						value: 1,
					},
					{
						name: "two",
						value: 2,
					},
					{
						name: "three",
						value: 3,
					},
				],
				require: true,
			},
			{
				name: "second-number",
				description: "The second number.",
				type: ApplicationCommandOptionType.Number,
				require: true,
			},
		],
	},
	{
		name: "kat",
		description: "Sends kat!",
	},
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log("Registering slash commands...");

		await rest.put(
			Routes.applicationGuildCommands(
				process.env.CLIENT_ID,
				process.env.GUILD_ID
			),
			{ body: commands }
		);
		console.log("Slash commands were registered successfully!");
	} catch (error) {
		console.log(`There was an error ${error}`);
	}
})();
