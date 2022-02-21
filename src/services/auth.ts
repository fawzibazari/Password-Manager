import axios from "axios";
import authHeader from "../components/Header/auth-header";
const API_URL = "https://password-managerapi.herokuapp.com/auth/";

export class AuthServices {
    static async login(email: string, password: string) {
        return axios.post(
        API_URL + 'login',
        { email, password })
        .then((response) => {
            if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            }
            const token = response.data.token            
            return token;
        })

    }
    
    static async getUser(){
        return axios.get( API_URL + 'users', {headers: authHeader() as any});
    }

    static async logout() {
        localStorage.removeItem("user")
    }
    
}