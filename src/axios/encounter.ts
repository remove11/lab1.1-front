  import axios from "axios";
  import { backendUrl } from "../constant";
  
  export type IEncounter = 
  {
    id: string,
    patientSocialNr: string,
    patientName: string,
    doctorEmployeeId: string,
    doctorName: string,
    description: string,
    createdAt: string
  }

  export type IEncounterCreate = {
    patientSocialNr: string,
    doctorEmployeeId: string,
    description: string
  }
  
  export const getEncountersBySocialNr = async (socialNr:string):Promise<IEncounter[]|null> => {
      try{
          const response = await axios.get(backendUrl+`/${socialNr}/encounter`)
          return response.data;
      }catch(e:any){
          return null
      }
  }
  
  export const getEncounters = async ():Promise<IEncounter[]|null> => {
      try{
          const response = await axios.get(backendUrl+"/encounter")
          return response.data;
      }catch(e:any){
          return null
      }
  }

  export const getEncounterById = async (encounterId:string):Promise<IEncounter|null> => {
      try{
          const response = await axios.get(backendUrl+"/encounter/"+encounterId)
          return response.data;
      }catch(e:any){
          return null
      }
  }

  export const createEncounter = async (encounter:IEncounterCreate):Promise<Boolean> => {
      try{
          await axios.post(backendUrl+"/encounter", encounter);
          return true;
      }catch(e:any){
          return false
      }
  }