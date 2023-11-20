  import axios from "axios";
  import { backendUrl } from "../constant";
  
  export type ICondition = 
  {
    id: string,
    patientSocialNr: string,
    patientName: string,
    doctorEmployeeId: string,
    doctorName: string,
    diagnos: string,
    createdAt: string,
  }

export type IConditionCreate = {
    patientSocialNr: string,
    doctorEmployeeId: string,
    diagnos: string
  }
  
  export const GetConditionsByUserId = async (userId:string):Promise<ICondition[]|null> => {
      try{
          const response = await axios.get(backendUrl+`/${userId}/medicalCondition`)
          return response.data;
      }catch(e:any){
          return null
      }
  }
  
  export const getConditions = async ():Promise<ICondition[]|null> => {
      try{
          const response = await axios.get(backendUrl+"/medicalCondition")
          return response.data;
      }catch(e:any){
          return null
      }
  }

  export const createCondition = async (observationCreate:IConditionCreate):Promise<boolean> =>{
      try{
          await axios.post(backendUrl+"/medicalCondition", observationCreate)
          return true
      }catch(e:any){
          return false
      }

  }