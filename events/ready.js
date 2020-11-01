module.exports = (client, message) => {

    console.log(`Signed in as: ${client.user.tag}`);
    console.log(`client.config.prefix: ${client.config.prefix}`);

    client.user.setStatus('Available');
    client.user.setPresence({ activity: { name: "the console logs" } });
    try {
        client.user.setPresence({ activity: { type: "WATCHING", name: "out for Hephaestus 2.0", url: "https://donaldjennings.github.io/Hephaestus-Bot/" } });
    } catch (err) {
        console.log(err)
    }

}