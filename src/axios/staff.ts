import axios from "axios"
import { backendUrl } from "../constant"


export type IStaff = 
{
    socialNr: string,
    surename: string,
    lastname: string,
    adress: string,
    phoneNr: string,
    gender: string,
    calenderId: string,
    employeeId: string,
    keycloakId: string,
    email: string,
}

export type IStaffCreate = {
    username: string,
    password: string,
    surename: string,
    email: string,
    lastname: string,
    adress: string,
    socialNr: string,
    phoneNr: string,
    gender: string,
    createdAt: string,
    employeeId: string,
    degreeId: string,
    type: string,
    getCalenderId: string
}

export const createStaff = async (patient:IStaffCreate):Promise<boolean> => {
    try{
        await axios.post(backendUrl+"/otherPersonal",patient)
        return true;
    }catch(e:any){
        return false
    }
}

export const getStaff = async ():Promise<IStaff[]|null> => {
    try{
        const patients = await axios.get(backendUrl+"/otherPersonal")
        return patients.data;
    }catch(e:any){
        return null
    }
}

export const getStaffDetail = async (id:string):Promise<IStaff|null> => {
    try{
        const patients = await axios.get(backendUrl+"/otherPersonal/"+id)
        return patients.data;
    }catch(e:any){
        return null
    }
}