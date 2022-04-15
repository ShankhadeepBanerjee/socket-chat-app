function createListElement(messageObj){
    const {owner, text, id} = messageObj;
    const element = document.createElement('li');
    element.classList.add('p-2','bg-slate-200', 'rounded', 
                            'grow-1', 'shrink-0',
                            'my-1', 'w-fit', 'max-w-[80%]', 
                            'overflow-hidden', 'text-wrapp-circle', 
                            'transition', 'ease-in')
    element.innerHTML = `
                        <strong>${owner}: </strong> 
                        <span class="overflow-hidden break-words">${text}</span>
                        `;
    return element
}


function addPopUpAnimation(element) {
    element.classList.add('scale-50');
    setTimeout(()=>{ element.classList.remove('scale-50'); element.classList.add('scale-100')}, 100);
}


export {createListElement, addPopUpAnimation};