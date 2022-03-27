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
        if(this.db.length >= 500) {
            this.db = this.db.slice(250, 500);
        }
    }

    close(){
        writeDB(this.db);
    }
}