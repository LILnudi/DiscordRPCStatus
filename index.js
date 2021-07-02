const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
	console.log("READY");
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Reklamownia • SrC4Sell",
            state: "🛒 Zareklamuj się u nas!",
            assets: {
                large_image: "main",  
                large_text: "SrC4Sell"
            },
            buttons: [
                { label: "✅ Dołącz", url: "https://discord.gg/5GsDnZUG4M" }
            ]
        }
    });
});

client.login({
    clientId: '', 
    clientSecret: '' 
});
