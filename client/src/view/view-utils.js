function createListElement(messageObj){
    const {owner, text, id} = messageObj;
    const element = document.createElement('li');
    element.classList.add('p-2','bg-slate-200', 'rounded', 'my-1', 'w-fit', 'max-w-[80%]', 'overflow-hidden', 'text-wrapp-circle')
    element.innerHTML = `
                        <strong>${owner}: </strong> 
                        <span class="overflow-hidden break-words">${text}</span>
                        `;
    return element
}



export {createListElement};