const { writeDB, readDB, checkDBExists, createDbDirectory } = require("./../utils/storage-utils.js");

module.exports = class messageDB{
    constructor (){
        if (!checkDBExists()){
            console.log("creating db");
            createDbDirectory();
            writeDB([]);
        }
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