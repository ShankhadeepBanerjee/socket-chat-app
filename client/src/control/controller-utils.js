function wrapText(owner, text, timestamp){
    return {
        owner,
        text,
        timestamp,
        id: timestamp
    }
}

export {wrapText};