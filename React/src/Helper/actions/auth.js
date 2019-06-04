class Auth {
    constructor(){
        this.auth = false;
    }
    
    login(){
        this.auth = true
    }

    loguit(){
        this.auth = false
    }

    isAuthenticated() {
        return this.auth
    }
    
}

export default new Auth()