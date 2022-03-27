const { writeDB, readDB } = require("./../database/storage-utils.js");

module.exports = class messageDB{
    constructor(){
        this.db = [...readDB()];   
    }

    getAllMessages(){
        return(this.db);
    }

    addMessage(messageObj){
        this.db.push(messageObj);
    }

    close(){
        writeDB(this.db);
    }
}