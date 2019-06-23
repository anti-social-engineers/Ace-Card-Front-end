import axios from 'axios'
import config from '../../config/config'

class Auth {
    constructor(){
        this.auth = false;
    }
    
    login(){
        this.auth = true
    }

    loguit(){
        const header = 'Bearer ' + localStorage.getItem('jwt token');
        axios.post(config.API_URL + 'api/logout', { headers: { Authorization: header } });
        this.auth = false
    }

    isAuthenticated() {
        return this.auth
    }
}

export default new Auth()