import axios from "axios";
import authHeader from "../components/Header/auth-header";
const API_URL = "http://localhost:4000/";

export class PasswordsServices {

    static async getPasswords(){
        return axios.get( API_URL + 'getpassword', {headers: authHeader() as any});
    }
    
    static async newPasswords(password: string, website: string){
        return axios.post( API_URL + 'addpassword',
             {password , website},
             {headers: authHeader() as any});
    }
    
    static async decryptPassword(encryption:any){
        return axios.post( API_URL + 'decryptpassword',
         {password: encryption.password , iv: encryption.iv },
         {headers: authHeader() as any});
    }
}

