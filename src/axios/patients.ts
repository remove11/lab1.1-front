import axios from "axios";
import { backendUrl } from "../constant";

export type IPatient = 
        {
          socialNr: string,
          surename: string,
          lastname: string,
          adress: string,
          phoneNr: string,
          gender: string,
          keycloakId: string,
          createdAt: string,
          email: string,
        }

export type IPatientCreate = 
{
  username: string,
  password: string,
  surename: string,
  email: string,
  lastname: string,
  adress: string,
  socialNr: string,
  phoneNr: string
  gender: "MAN"|"WOMEN"|"OTHER"
  createdAt: string,
  employeeId: string,
  degreeId: string,
  type: string,
  getCalenderId: string
}

export const createPatient = async (patient:IPatientCreate):Promise<boolean> => {
    try{
        await axios.post(backendUrl+"/patient",patient,{
            headers:{
                Authorization:""
            }
        })
        return true;
    }catch(e:any){
        return false
    }
}

export const getPatients = async ():Promise<IPatient[]|null> => {
    try{
        const patients = await axios.get(backendUrl+"/patient")
        return patients.data;
    }catch(e:any){
        return null
    }
}

export const getPatientDetail = async (id:string):Promise<IPatient|null> => {
    try{
        const patients = await axios.get(backendUrl+"/patient/"+id)
        return patients.data;
    }catch(e:any){
        return null
    }
}