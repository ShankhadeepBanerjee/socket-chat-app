import {createListElement} from './view-utils.js';
export default class View{
    constructor(){
        this.messageListElem = document.querySelector('ul#messageList');
        this.messageInputElem = document.querySelector('input[name=message]');
        this.userCountElem = document.querySelector('#usercount');
        this.messageInputFormElement = document.querySelector('form#input-form');
    };

    clearInputField(){
        this.messageInputElem.value = "";
    }

    addMessageToList(messageObj){
        this.messageListElem.appendChild(createListElement(messageObj))
    }

    renderAllMessages(allMessages){
        allMessages.forEach(messageObj => {
            this.messageListElem.appendChild(createListElement(messageObj))
        });
    }

    scrollToBottomOfMessagesList(){
        this.messageListElem.scrollTop = this.messageListElem.scrollHeight;
    }


}