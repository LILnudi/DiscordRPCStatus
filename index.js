const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
	console.log("READY");
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "text",
            state: "text",
            assets: {
                large_image: "main",  
                large_text: "text"
            },
            buttons: [
                { label: "text", url: "url" }
            ]
        }
    });
});

client.login({
    clientId: 'text', 
    clientSecret: 'text' 
});
