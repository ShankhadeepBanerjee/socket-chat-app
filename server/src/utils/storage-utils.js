const fs = require('fs');
const {PATHS} = require('./constants');

const file = PATHS.STORAGE;
const fileStream = fs.createWriteStream(file, {
    flags: 'a' // 'a' means appending (old data will be preserved)
  })

let messageStore;


const read = ()=> {
    data = fs.readFileSync(file, "utf-8");
    return(JSON.parse(data));
}

const write = (obj)=>{
    data = read();
    messageStore = data.allMessages;
    console.log(messageStore);
    messageStore.push(obj);
    // fileStream.write(JSON.stringify({allMessages : messageStore}));
    fs.writeFile(file, JSON.stringify({allMessages : messageStore}), (err)=>{console.error(err);});
}



module.exports = { write, read }