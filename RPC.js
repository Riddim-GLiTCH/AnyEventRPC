const clientConfig = require('./assets/config.json');
const clientId = `${clientConfig.clientId}`;
const client = require('discord-rich-presence')(clientId);

// Set up the target date and get the respective time.
let targetDate = new Date("May 12, 2023 12:00:00").getTime()

// Initiate the update function
let update = setInterval(function() {
    let currentDate = new Date().getTime();
    let timeUntil = targetDate - currentDate;

    // Get the remaining days, hours and minutes
    let days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));

    console.log(`${days}d ${hours}h ${minutes}m`);
    setRpc(days, hours, minutes);
}, 1000);

function setRpc(days, hours, minutes) {
    client.updatePresence({
        details: "Waiting for Tears of the Kingdom...",
        state: `${days}d ${hours}h ${minutes}m left!`,
        largeImageKey: "totk",
        largeImageText: "Tears of the Kingdom",
        smallImageKey: "clock",
        smallImageText: `Time left: ${days}d ${hours}h ${minutes}m`,
        buttons: [
            {
                label: "Watch the countdown",
                url: "https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#"
            }
        ]
    });
}