import axios from "axios";
import authHeader from "../components/Header/auth-header";
const API_URL = "https://password-managerapi.herokuapp.com/";

export class PasswordsServices {

    static async getPasswords(){
        return axios.get( API_URL + 'getpassword', {headers: authHeader() as any});
    }
    
    static async newPasswords( website: string,password: string,){
        return axios.post( API_URL + 'addpassword',
             {website, password},
             {headers: authHeader() as any});
    }
    
    static async decryptPassword(encryption:any){
        return axios.post( API_URL + 'decryptpassword',
         {password: encryption.password , iv: encryption.iv },
         {headers: authHeader() as any});
    }
}

