import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus, faComment, faHospitalUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import { IObservation, getObservationsByEncounterId } from '../../axios/observation';
import { IEncounter, getEncounterById, getEncounters } from '../../axios/encounter';
import { IPatient, getPatientDetail } from '../../axios/patients';
import { convertDate } from '../../utils';
import NewObservation from '../../components/NewObservation';



const PatientObservation: React.FC = () => {
    const {encounterId, userId} = useParams();
    const [userDetail, setUserDetail] = useState<IPatient|null>(null)
    const [userEncounter, setUserEncounter] = useState<IEncounter|null>(null)
    const [userObservations, setUserObservations] = useState<IObservation[]|null>(null)

    useEffect(()=>{
        if(encounterId == null || userId == null){
            console.log("Opps...")
            return
        }
        getEncounterById(encounterId).then(encounters => {
            setUserEncounter(encounters)
        })

        getObservationsByEncounterId(encounterId).then(observations => {
            setUserObservations(observations)
        })

        getPatientDetail(userId).then(userD => {
            setUserDetail(userD)
        })
    },[])

    const onObservatitonCreate = () => {
        if(encounterId == null){
            console.log("Opps...")
            return
        }

        getObservationsByEncounterId(encounterId).then(observations => {
            setUserObservations(observations)
        })
    }


  return (
    <main>
        <div className="max-w-[1300px] min-h-[400px] border rounded-3xl m-auto">
            <div className='border-b flex justify-between items-center'>
                <div className='flex'>
                    <div className={`flex py-9 ml-9 px-3`}>
                        <FontAwesomeIcon icon={faHospitalUser} size='xl' color="#3260FC"/>
                        <p className={`text-[#3260FC] text-xl ml-4`}>Patient details</p>
                    </div>
                </div>
                
            </div>
            <div className='p-5 flex'>
                <div>
                    <div className='flex flex-col items-center max-w-sm bg-white p-10'>
                        <FontAwesomeIcon icon={faCircleUser} size='5x' color='#6E6E6E'/>
                        <p className='font-medium mt-4'>{userDetail == null ? "Loading" : userDetail.surename+" "+userDetail.lastname}</p>
                        <p className='text-[#6E6E6E] mb-10'>Patient</p>
                        <div>
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faEnvelope} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>{userDetail == null ? "Loading" : userDetail.email}</p>
                            </div>
                            <div className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faPhone} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>{userDetail == null ? "Loading" : userDetail.phoneNr}</p>
                            </div>
                            <div className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faLocationDot} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>{userDetail == null ? "Loading" : userDetail.adress}</p>
                            </div>
                        </div>
                    </div >
                    <div  className='flex flex-col items-center max-w-sm bg-white p-10 border-t'>
                        <div className='w-44'>
                            <Link to={"/app/"+userId+"/messages"}>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faComment} color='#6E6E6E' size='lg'/>
                                    <p className='text-[#6E6E6E] ml-3'>Send message</p>
                                </div>
                            </Link>
                            <Link to={"/app/"+userId+"/encounters"}>
                                <div className='flex items-center mt-4'>
                                    <FontAwesomeIcon icon={faCalendarPlus} color='#6E6E6E' size='lg'/>
                                    <p className='text-black ml-3 font-semibold'>Encounters</p>
                                </div>
                            </Link>
                            <Link to={"/app/"+userId+"/conditions"}>
                                <div className='flex items-center mt-4'>
                                    <FontAwesomeIcon icon={faLocationDot} color='#6E6E6E' size='lg'/>
                                    <p className='text-[#6E6E6E] ml-3'>Conditions</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border w-full ml-5'>
                    <div className='flex items-center justify-between px-8 py-6 border-b'>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faHospitalUser} size='xl' color='#3260FC'/>
                            <p className='text-[#3260FC] ml-3'>
                                <Link to="/app/user/encounters">
                                    <span>Encounter</span>
                                </Link>
                            /Observations</p>
                        </div>
                        <NewObservation onObservatitonCreate={onObservatitonCreate}/>
                        
                    </div>
                    <div className='mx-8 my-6'>
                        <p>Time: {userEncounter == null ? "Loading" : convertDate(userEncounter.createdAt)}</p>
                        <p className='mt-1'>Subject: {userEncounter == null ? "Loading" : userEncounter.description}</p>
                        <p className='mt-1'>Doctor: {userEncounter == null ? "Loading" : userEncounter.doctorName}</p>
                        <p className='text-[#3260FC] mt-10 font-semibold'>Observations</p>

                        {
                            userObservations == null ? "Loadning" : (
                                userObservations.map((observation,i) => (
                                    <div key={i} className='mt-5'>
                                        <div className='flex'>
                                            <p>{convertDate(observation.createdAt)}</p>
                                            <p className='ml-10'>{observation.description}</p>
                                        </div>
                                        <p className='text-sm text-[#6E6E6E] mt-1'>{observation.doctorName}</p>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default PatientObservation;