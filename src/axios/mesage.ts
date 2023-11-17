import axios from "axios";
import { backendUrl } from "../constant";


export type IMessage = {
    id: string,
    senderName: string,
    senderSocialNr: string,
    receiverName: string,
    receiverSocialNr: string,
    content: string,
    createdAt: string,
}

export type IMessageCreate = {
        senderSocialNr: String,
        receiverSocialNr: string,
        description: String
}

export const getConversation = async (p1:string, p2:String):Promise<IMessage[]|null> => {
    try{
        const response = await axios.get(backendUrl+`/message/${p1}/${p2}`)
        return response.data;
    }catch(e:any){
        return null
    }
}

export const createMessage = async (message:IMessageCreate) => {
    try{
        const response = await axios.post(backendUrl+`/message`, message)
        return response.data;
    }catch(e:any){
        return null
    } 
}