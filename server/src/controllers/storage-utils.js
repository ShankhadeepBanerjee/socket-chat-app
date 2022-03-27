const fs = require('fs');
const {PATHS} = require('../models/constants');

const file = PATHS.STORAGE;

const read = ()=> {
    data = fs.readFileSync(file, "utf-8");
    return(JSON.parse(data).allMessages);
}


const write = (data)=>{
    console.log("Now writing", data);
    fs.writeFile(file, JSON.stringify({allMessages : data}), (err)=>{console.error(err);});
}



module.exports = { write, read }