function createListElement(messageObj){
    const {owner, text, id} = messageObj;
    const element = document.createElement('li');
    element.innerHTML = `<strong>${owner}: </strong> <span>${text}</span>`;
    console.log(element);
    return element
}



export {createListElement};