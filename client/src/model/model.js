export default class Model {
    constructor(){
        this.user = this.fetchUser();
    }

    fetchUser(){
        let user = localStorage.getItem('user');
        if (!user) user = prompt('Set User Name: ');
        localStorage.setItem('user', user)
        return(user)
    }

    getUser(){
        return(this.user)
    }
}