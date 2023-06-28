module.exports = {
  name: "ping",
  commands: ["ping"],
  description: "Replies with pong!",
  work: async function(msg) {
    await msg.reply("Pong!");
  }
};