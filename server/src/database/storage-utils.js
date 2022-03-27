const fs = require('fs');
const {PATHS} = require('./../constants.js');

const file = PATHS.STORAGE;

const readDB = ()=> {
    data = fs.readFileSync(file, "utf-8");
    return(JSON.parse(data).allMessages);
}


const writeDB = (data)=>{
    console.log("Now writing", data);
    fs.writeFile(file, JSON.stringify({allMessages : data}), (err)=>{console.error(err);});
}



module.exports = { writeDB, readDB }