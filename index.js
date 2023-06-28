/* Author: José Rodolfo (jric2002) */
const path = require("node:path");
const process = require("node:process");
const fs = require("node:fs");
const colors = require("./modules/colors.js");
const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const bot = {
  name: "Paddington",
  token: "token"
};
client.once("ready", function() {
  process.stdout.write(colors.white + "[" + colors.green + "+" + colors.white + "] " + bot["name"] + " connected..." + colors.reset);
});
const commands_path = path.resolve(__dirname, "modules", "commands");
const command_files = (fs.readdirSync(commands_path)).filter((e, i, a) => e.endsWith(".js"));
console.log(command_files);
var commands = [];
for (file of command_files) {
  var file_path = "./modules/commands/" + file;
  var command = require(file_path);
  commands.push(command);
}
console.log(commands);
/* client.on("messageCreate", async function(message) {
  console.log(message);
});
client.once("", function() {
  process.stdout.write(colors.white + "[" + colors.green + "+" + colors.white + "] " + "disconnected..." + colors.reset);
})
client.login(bot["token"]); */