const fs = require('fs');
const {PATHS} = require('./../constants.js');

const file = PATHS.STORAGE_PATH;
const storage_dir = PATHS.STORAGE_DIRECTORY;

const createDbDirectory = ()=> {
    fs.mkdirSync(storage_dir);
}
const checkDBExists = () => {
    return fs.existsSync(file);
}

const readDB = ()=> {
    data = fs.readFileSync(file, "utf-8");
    return(JSON.parse(data).allMessages);
}


const writeDB = (data)=>{
    console.log("Now writing", data);
    fs.writeFileSync(file, JSON.stringify({'allMessages' : data}), 'utf-8');
}



module.exports = { checkDBExists, writeDB, readDB, createDbDirectory }