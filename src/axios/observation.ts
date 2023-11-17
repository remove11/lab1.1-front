  import axios from "axios";
  import { backendUrl } from "../constant";
  
  export type IObservation = 
  {
    id: string,
    patientName: string, 
    doctorName: string,
    description: string,
    createdAt: string,
  }

export type IObservationCreate = {
    id: string,
    patientSocialNr: string,
    doctorEmployeeId: string,
    encounterId: string,
    description: string
}
  
  export const getObservationsByEncounterId = async (encounterId:string):Promise<IObservation[]|null> => {
      try{
          const response = await axios.get(backendUrl+`/${encounterId}/observation`)
          return response.data;
      }catch(e:any){
          return null
      }
  }
  
  export const getObservations = async ():Promise<IObservation[]|null> => {
      try{
          const response = await axios.get(backendUrl+"/observation")
          return response.data;
      }catch(e:any){
          return null
      }
  }

  export const createObservations = async (observationCreate:IObservationCreate):Promise<boolean> =>{
      try{
          await axios.post(backendUrl+"/observation", observationCreate)
          return true
      }catch(e:any){
          return false
      }

  }