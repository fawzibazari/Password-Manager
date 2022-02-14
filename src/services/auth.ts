import axios from "axios";
const API_URL = "http://localhost:4000/auth/";

export class AuthServices {
    static async login(email: string, password: string) {
        return axios.post(
        API_URL + 'login',
        { email, password })
        .then((response) => {
            if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            }
            console.log(response.data)
            return response.data.token;
        })
    }

    static async logout() {
        localStorage.removeItem("user")
    }
    
}