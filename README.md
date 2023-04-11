# TOTK Countdown RPC

This is a Discord Rich Presence client that displays the time left until the release of Tears of the Kingdom.
![Preview-1](https://user-images.githubusercontent.com/87764384/231173107-2a5e01e8-1a9f-4743-bc8c-034a35287fe6.png)
![preview-1](https://user-images.githubusercontent.com/87764384/231172907-99424b50-f548-49ed-9671-df2a6946b07e.png)

## Prerequisites

Before you can run this program, you need to have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.0.0 or later)


## Installation

1. Clone this repository or download the ZIP file and extract its contents.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the required dependencies by running the following command:

```
npm install discord-rpc
```

4. Set up the Discord application by following these steps:
- Go to the [Discord Developer Portal](https://discord.com/developers/applications).
- Click on "New Application" and give it a name.
- Click on "Create" to create the application.
- Make sure the application is named "the waiting game".
- Under "Rich Presence", click on "Art Assets" and upload the `totk.png` and `clock.png` files from the `assets` folder.
- Note down the "Client ID" at the top of the page.
5. Replace the `clientId` variable in `RPC.js` with the client ID you just noted down.
6. Run the program by executing the following command:

```
node rpc.js
```

That's it! The TOTK Countdown RPC should now be running and displaying your Rich Presence status in Discord.


## Credits:

This project was created with the help of [ChatGPT](https://openai.com/blog/chatgpt), a language model trained by [OpenAI](https://openai.com/). Special thanks to ChatGPT for providing guidance and assistance in understanding and creating the code.

Additionally, thanks to the following resources:

- [Discord Developer Portal](https://discord.com/developers/docs/intro) for information on setting up Discord Rich Presence
- [npm](https://www.npmjs.com/) for the `discord-rpc` module used in this project
- [GitHub](https://github.com/) for hosting this project
- [Nintendo](https://www.nintendo.com/) for a legenedary up-and-coming Zelda title.
