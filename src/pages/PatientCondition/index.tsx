import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faCalendarPlus, faComment, faHospitalUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { IPatient, getPatientDetail } from '../../axios/patients';
import { convertDate } from '../../utils';
import NewEncounter from '../../components/NewEncounter';
import { GetConditionsByUserId, ICondition } from '../../axios/condition';
import NewCondition from '../../components/NewCondition';


const PatientCondition: React.FC = () => {
    const {userId} = useParams()
    const [userDetail, setUserDetail] = useState<IPatient|null>(null)
    const [userCondition, setUserCondition] = useState<ICondition[]|null>(null)

    useEffect(()=>{
        if(userId == null){
            console.log("Opps...")
            return
        }
        getPatientDetail(userId).then(userD => {
            setUserDetail(userD)
        })
        GetConditionsByUserId(userId).then(encounters => {
            setUserCondition(encounters)
        })
    },[])


    const onConditionCreated = () => {
        if(userId == null){
            console.log("Opps...")
            return
        }

        GetConditionsByUserId(userId).then(encounters => {
            setUserCondition(encounters)
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
                        <p className='font-medium mt-4'>{userDetail == null ? "Loading..." : userDetail.lastname + " " + userDetail.surename}</p>
                        <p className='text-[#6E6E6E] mb-10'>Patient</p>
                        <div>
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faEnvelope} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>{userDetail == null ? "Loading..." : userDetail.email}</p>
                            </div>
                            <div className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faPhone} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>{userDetail == null ? "Loading..." : userDetail.phoneNr}</p>
                            </div>
                            <div className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faLocationDot} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>{userDetail == null ? "Loading..." : userDetail.adress}</p>
                            </div>
                        </div>
                    </div >
                    <div  className='flex flex-col items-center max-w-sm bg-white p-10 border-t'>
                        <div className='w-44'>
                            <Link to={"/app/"+userId+"/messages"}>
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faComment} color='#6E6E6E' size='lg'/>
                                    <p className='text-[#6E6E6] ml-3'>Send message</p>
                                </div>
                            </Link>
                            <Link to={"/app/"+userId+"/encounters"}>
                                <div className='flex items-center mt-4'>
                                    <FontAwesomeIcon icon={faHospitalUser} color='#6E6E6E' size='lg'/>
                                    <p className='text-[#6E6E6E] ml-3'>Encounters</p>
                                </div>
                            </Link>
                            <Link to={"/app/"+userId+"/conditions"}>
                                <div className='flex items-center mt-4'>
                                    <FontAwesomeIcon icon={faLocationDot} color='#6E6E6E' size='lg'/>
                                    <p className='text-black ml-3 font-semibold'>Conditions</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border w-full ml-5'>
                    <div className='flex items-center justify-between px-8 py-6 border-b'>
                        <div className='flex items-center'>
                            <FontAwesomeIcon icon={faHospitalUser} size='xl' color='#3260FC'/>
                            <p className='text-[#3260FC] ml-3'>Encounter</p>
                        </div>
                        <NewCondition onConditionCreated={onConditionCreated}/>
                    </div>
                    <div className='mx-8 my-6'>
                        <div className='grid grid-cols-12 gap-y-6 mb-4'>
                            <p className='col-span-3 text-[#6E6E6E] ml-5'>Date</p>
                            <p className='col-span-8 text-[#6E6E6E]'>Subject</p>
                        </div>
                        
                        {
                            userCondition == null ? "Loading..." :
                            (
                                userCondition.map((condition,i) => (
                                    <div key={i} className='grid grid-cols-12 gap-y-6 bg-white py-5'>
                                        <p className='col-span-3 text-[#6E6E6E] pl-5'>{convertDate(condition.createdAt)}</p>
                                        <p className='col-span-8 text-[#6E6E6E]'>{condition.diagnos}</p>
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

export default PatientCondition;