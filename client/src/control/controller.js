import { ENV } from './../../config.js';
import { wrapText } from './controller-utils.js';

export default class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.socket = io(`ws://${ENV.SOCKET_URL || 'localhost:5000'}`);
      
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

      this.view.submitBtn.onclick = ()=>{
        const messageObj = wrapText(this.model.user, this.view.messageInputElem.value, Date.now());
        this.socket.emit('message', messageObj);
        this.view.clearInputField();
      }
    }

    addMessage(messageObj){
      this.view.addMessageToList(messageObj);
      this.view.scrollToBottomOfMessagesList();
    }

    displayAllMessages(allMessages){
        this.view.renderAllMessages(allMessages);
        this.view.scrollToBottomOfMessagesList();
    }
}
