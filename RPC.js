const clientConfig = require('./assets/config.json');
const clientId = `${clientConfig.clientId}`;
const clientFormat = `${clientConfig.format}`;
const client = require('discord-rich-presence')(clientId);

// Set up the target date and get the respective time.
let targetDate = new Date("May 12, 2023 12:00:00").getTime()

// Print confirmation message
console.log("RPC is running! Just sit back and relax...");

// Initiate the update function
let update = setInterval(function() {
    let currentDate = new Date().getTime();
    let timeUntil = targetDate - currentDate;

    // Get the remaining days, hours and minutes
    let days = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);

    // console.log(`${days}d ${hours}h ${minutes}m`);
    setRpc(days, hours, minutes, seconds);
}, 1000);

function setRpc(days, hours, minutes, seconds) {
    try {
        if (clientFormat === "segmented") {
            client.updatePresence({
                details: "Waiting for Tears of the Kingdom...",
                state: `${days}:${hours}:${minutes}:${seconds} left!`,
                largeImageKey: "totk",
                largeImageText: "Tears of the Kingdom",
                smallImageKey: "clock",
                smallImageText: `Time left: ${days}:${hours}:${minutes}`,
                buttons: [
                    {
                        label: "Watch the countdown",
                        url: "https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#"
                    }
                ]
            });
        } else if (clientFormat === "segmented2") {
            client.updatePresence({
                details: "Waiting for Tears of the Kingdom...",
                state: `${days}d:${hours}h:${minutes}m:${seconds}s left!`,
                largeImageKey: "totk",
                largeImageText: "Tears of the Kingdom",
                smallImageKey: "clock",
                smallImageText: `Time left: ${days}d:${hours}h:${minutes}m`,
                buttons: [
                    {
                        label: "Watch the countdown",
                        url: "https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#"
                    }
                ]
            });
        } else if (clientFormat === "segmented3") {
            client.updatePresence({
                details: "Waiting for Tears of the Kingdom...",
                state: `${days}-${hours}-${minutes}-${seconds} left!`,
                largeImageKey: "totk",
                largeImageText: "Tears of the Kingdom",
                smallImageKey: "clock",
                smallImageText: `Time left: ${days}-${hours}-${minutes}`,
                buttons: [
                    {
                        label: "Watch the countdown",
                        url: "https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#"
                    }
                ]
            });
        } else if (clientFormat === "dayFocused") {
            client.updatePresence({
                details: "Waiting for Tears of the Kingdom...",
                state: `Only ${days} days left!`,
                largeImageKey: "totk",
                largeImageText: "Tears of the Kingdom",
                smallImageKey: "clock",
                smallImageText: `Time left: ${days} days`,
                buttons: [
                    {
                        label: "Watch the countdown",
                        url: "https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#"
                    }
                ]
            });
        } else {
            client.updatePresence({
                details: "Waiting for Tears of the Kingdom...",
                state: `${days}d ${hours}h ${minutes}m ${seconds}s left!`,
                largeImageKey: "totk",
                largeImageText: "Tears of the Kingdom",
                smallImageKey: "clock",
                smallImageText: `Time left: ${days}d ${hours}h ${minutes}m `,
                buttons: [
                    {
                        label: "Watch the countdown",
                        url: "https://www.timeanddate.com/countdown/generic?iso=20230512T00&p0=1309&msg=Time+until+Tears+of+the+Kingdom+releases...&ud=1&font=slab&csz=1#"
                    }
                ]
            });
        }
    } catch (error) {
        console.error(error);
    }
}