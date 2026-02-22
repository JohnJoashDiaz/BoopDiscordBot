import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
    console.log('🤖 Boop is online and clean!');
});

client.login(process.env.DISCORD_TOKEN); 