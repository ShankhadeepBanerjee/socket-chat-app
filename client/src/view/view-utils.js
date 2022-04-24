function createElem(tag){
    return document.createElement(tag);
}

function createListElement(messageObj, chatOwner){
    const {owner, text, id} = messageObj;

    const listElement = createElem('li');
    const headingElement = createElem('strong');
    const textElement = createElem('strong');

    listElement.classList.add('ListElement');
    if(chatOwner === owner) listElement.classList.add('self-end');

    
    headingElement.classList.add('block', 'w-fit', 'italic', 'text-xs', 'text-blue-300')
    headingElement.innerText = `${owner}`

    textElement.classList.add()
    textElement.innerText = text;

    listElement.appendChild(headingElement);
    listElement.appendChild(textElement);

    return listElement
}


function addPopUpAnimation(element) {
    element.classList.add('scale-50');
    setTimeout(()=>{ element.classList.remove('scale-50'); element.classList.add('scale-100')}, 100);
}


export {createListElement, addPopUpAnimation};