# AnyEventRPC

This is a Discord Rich Presence client that displays the time left until an event specified by a user is happening.
![preview1](https://github.com/Riddim-GLiTCH/AnyEventRPC/assets/46762556/a749d02c-d367-44c1-b45c-b4504b89dba4)
![preview2](https://github.com/Riddim-GLiTCH/AnyEventRPC/assets/46762556/e717dcd9-396b-4517-b21d-75a5366464c8)


## Prerequisites

Before you can run this program, you need to have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.0.0 or later)


## Installation

1. Clone this repository or download the ZIP file and extract its contents.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the required dependencies by running the following command:

```
npm install discord-rich-presence
```

4. Set up the Discord application by following these steps:
- Go to the [Discord Developer Portal](https://discord.com/developers/applications).
- Click on "New Application" and give it a name.
- Click on "Create" to create the application.
- Make sure the application is named "AnyEventRPC" or "AnyEventRpc". 
- Under "Rich Presence", click on "Art Assets" and upload every asset you find inside the `assets` folder. (Except for the config.json)
- Note down the "Application ID" inside the first tab of the "Settings" category.
5. Replace the `clientId` variable in `config.json`, which is stored in the `assets` folder with the Application ID you just noted down.
6. Set the format of the remaining time as you wish. Look down below for more information on available formats.
7. Run the program by executing the following command:

```
node RPC.js
```

That's it! The AnyEventRPC should now be running and displaying your Rich Presence status in Discord.

## Available Formats

AnyEventRPC supports a few formats to display the remaining time as.
See the list below for info:

- `default` -> Displays the remainder as `20d 22h 13m`
- `segmented` -> Displays the remainder as `20:22:13`
- `segmented2` -> Displays the remainder as `20d:22h:13m`
- `segmented3` -> Displays the remainder as `20d-22h-13m`
- `dayFocused` -> Displays the remainder as `Only 20 days left!`

## Available Image Keys

Since there are a multitude of events that can happen, AnyEventRPC comes with three default images.
See the following list for info:

- `fireworks` -> A celebration is happening! Woo, fireworks!
- `birthday` -> Happy birthday to you! Happy birthday to you!
- `unknown` -> Any other event that does not fit under currently existing categories.
