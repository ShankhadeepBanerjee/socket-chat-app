function createListElement(messageObj){
    const {owner, text, id} = messageObj;
    const element = document.createElement('li');
    element.classList.add('p-2','bg-slate-200', 'rounded', 'my-1', 'w-fit')
    element.innerHTML = `<strong>${owner}: </strong> <span>${text}</span>`;
    return element
}



export {createListElement};