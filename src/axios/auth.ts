import axios from "axios";
import Cookies from 'js-cookie';
import { backendUrl, keycloakUrl } from "../constant";


axios.defaults.withCredentials = true;

export type IUser = {
    socialNr: String,
    roles: String[]
  }

const token = Cookies.get("Authorization")
if(token != null)
    axios.defaults.headers.common["Authorization"] = token;



export const getAccessToken = async (username:String, password:String) => {

    const loginData = {
        grant_type: 'password',
        client_id: 'springbootapp',
        client_secret: 'YdL3HvMXmVdk13Da5CU00Fmgp2xtZutn',
        username: username,
        password: password,
    };

    try{
        const user = await axios.post(keycloakUrl, loginData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true,
        })

        return user.data.access_token;
    }catch(e:any){
        return null;
    }
}

export const setAuthToken = (token : string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    Cookies.set("Authorization", `Bearer ${token}`,{expires:0.00347222});
}

export const removeAuthToken = (token : string) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    Cookies.remove("Authorization");
}

export const getUserInfo = async ():Promise<IUser|null> => {
    try{
        const user = await axios.get(backendUrl+"/user",{
            withCredentials: true,
         })
        return user.data;
    }catch(e:any){
        return null;
    }
}
