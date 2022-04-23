# socket-chat-app


## This is a chat app made with socket.io

# Get Started

* clone repo `git clone "https://github.com/ShankhadeepBanerjee/socket-chat-app.git"`


## Client

* `cd client`
* `npm intsall`
* add `config.js`
* * add this `export const ENV = {
    SOCKET_URL_DEV: 'localhost:5000/',
    SOCKET_URL_PROD: 'your-url',
    ENVIRONMENT: "DEV" or "PROD",
}` in `config.js`
* `npm start`

## Server

* `cd server`
* `npm intsall`
* * add this `PORT=5000` in `.env`
* `npm run dev`
