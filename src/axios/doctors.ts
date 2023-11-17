import axios from "axios"
import { backendUrl } from "../constant"

export type IDoctor = 
{
    socialNr: string,
    surename: string,
    lastname: string,
    adress: string,
    phoneNr: string,
    gender: string,
    degreeId: string,
    email: string,
    keycloakId: string,
    employeeId: string
}

export type IDoctorCreate = {
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

export const createDoctor = async (patient:IDoctorCreate):Promise<boolean> => {
    try{
        await axios.post(backendUrl+"/doctor",patient)
        return true;
    }catch(e:any){
        return false
    }
}

export const getDoctors = async ():Promise<IDoctor[]|null> => {
    try{
        const patients = await axios.get(backendUrl+"/doctor")
        return patients.data;
    }catch(e:any){
        return null
    }
}

export const getDoctorDetail = async (id:string):Promise<IDoctor|null> => {
    try{
        const patients = await axios.get(backendUrl+"/doctor/"+id)
        return patients.data;
    }catch(e:any){
        return null
    }
}