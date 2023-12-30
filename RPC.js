const clientConfig = require('./assets/config.json');
const clientId = `${clientConfig.clientId}`;
const format = `${clientConfig.format}`;
const client = require('discord-rich-presence')(clientId);

// Set up the target date and get the respective time.
let targetDate = new Date(`${clientConfig.eventDate}`).getTime()

// Print confirmation message
console.log("RPC is running! Just sit back and relax...");

// Initiate the update function
let update = setInterval(function() {
   let timeUntil = targetDate - new Date().getTime();

   let days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
   let hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);

   setRpc(days, hours, minutes, seconds);
}, 60 * 1000);

function setRpc(days, hours, minutes, seconds) {
    try {
        let stateText = '';
        let smallImageText = '';

        switch (format) {
            case 'segmented':
                stateText = `${days}:${hours}:${minutes} left!`;
                smallImageText = `Time left: ${days}:${hours}:${minutes}`;
                break;
            case 'segmented2':
                stateText = `${days}d:${hours}h:${minutes}m left!`;
                smallImageText = `Time left: ${days}d:${hours}h:${minutes}m`;
                break;
            case 'segmented3':
                stateText = `${days}d-${hours}h-${minutes}m left!`;
                smallImageText = `Time left: ${days}-${hours}-${minutes}`;
                break;
            case 'dayFocused':
                stateText = `Only ${days} days left!`;
                smallImageText = `Time left: ${days} days`;
                break;
            default:
                stateText = `${days}d ${hours}h ${minutes}m left!`;
                smallImageText = `Time left: ${days}d ${hours}h ${minutes}m`;
                break;
        }

        if (stateText !== '' && smallImageText !== '') {
            client.updatePresence({
                details: `${clientConfig.eventDetails}`,
                state: stateText,
                largeImageKey: `${clientConfig.imageKey}`,
                smallImageKey: 'clock',
                smallImageText: smallImageText,
                buttons: [
                    {
                        label: `${clientConfig.label}`,
                        url: `${clientConfig.url}`
                    }
                ]
            });
        }
    } catch (e) {
        console.log(e);
    }
}