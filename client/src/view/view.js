import {createListElement} from './view-utils.js';
export default class View{
    constructor(){
        this.messageListElem = document.querySelector('ul#messageList');
        this.messageInputElem = document.querySelector('input[name=message]');
        this.submitBtn = document.querySelector('button#submit');
        this.userCountElem = document.querySelector('#usercount')
    };

    addMessageToList(messageObj){
        this.messageListElem.appendChild(createListElement(messageObj))
    }

    renderAllMessages(allMessages){
        allMessages.forEach(messageObj => {
            this.messageListElem.appendChild(createListElement(messageObj))
        });
    }


}