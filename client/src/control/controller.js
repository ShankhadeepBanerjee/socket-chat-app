import { ENV } from './../../config.js';
import { wrapText } from './controller-utils.js';

const Socket_URL = (ENV.ENVIRONMENT === 'DEV' ? `ws://${ENV.SOCKET_URL_DEV}` : `wss://${ENV.SOCKET_URL_PROD}`)

export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.socket = io(Socket_URL);
      
      this.socket.emit('joining', {id: this.model.user});

      this.socket.on("userCount", (data) => {
          this.view.userCountElem.innerText = (data);
      });

      this.socket.on("allMessages", (data) => {
        this.displayAllMessages(data);
      });

      this.socket.on("newMessage", (data) => {
          this.addMessage(data);
      });

      this.view.messageInputFormElement.onsubmit = (e)=> {
        e.preventDefault();
        if(!this.view.messageInputElem.value) return;
        const messageObj = wrapText(this.model.user, this.view.messageInputElem.value, Date.now());
        this.socket.emit('message', messageObj);
        this.view.clearInputField();
      }
    }

    addMessage(messageObj){
      this.view.addMessageToList(messageObj, this.model.user);
      this.view.scrollToBottomOfMessagesList();
    }

    displayAllMessages(allMessages){
        this.view.renderAllMessages(allMessages, this.model.user);
        this.view.scrollToBottomOfMessagesList();
    }
}
