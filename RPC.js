const DiscordRPC = require('discord-rpc');
const clientId = 'CLIENT ID HERE';

// Calculate the time left until May 12th, 2023 at 12:00 PM
const countdownDate = new Date('2023-05-12T12:00:00');
const currentDate = new Date();
const timeLeft = countdownDate - currentDate;
const timeLeftInMinutes = Math.floor(timeLeft / (1000 * 60));
const timeLeftInDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

// Set up the Rich Presence
const rpc = new DiscordRPC.Client({
    transport: 'ipc'
});

function setRPC() {
    rpc.setActivity({
        details: `Waiting for Tears of the Kingdom...`,
        state: `Only ${timeLeftInDays} days left!`,
        largeImageKey: 'totk',
        largeImageText: 'Tears of the Kingdom',
        smallImageKey: 'clock',
        smallImageText: `Time left: ${timeLeftInDays} days`,
        startTimestamp: Math.floor(currentDate.getTime() / 1000),
        endTimestamp: Math.floor(countdownDate.getTime() / 1000),
        buttons: [
            { label: 'Watch the Countdown', url: 'https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#' }
          ]
    });
}

rpc.on('ready', () => {
    console.log('Connected to Discord');
    setRPC();
    setInterval(() => {
        setRPC();
    }, 60 * 60 * 1000); // Update every hour
});

rpc.login({clientId}).catch((error) => {
    console.error(error);
});
