import React, { ChangeEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faCalendarPlus, faComment, faHospitalUser, faLocationDot, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom';
import { IPatient, getPatientDetail } from '../../axios/patients';
import { IMessage, IMessageCreate, createMessage, getConversation } from '../../axios/mesage';
import { useAuth } from '../../context/UserContext';
import { convertDate } from '../../utils';


const PatientMessage: React.FC = () => {
    const {userId} = useParams()
    const [userDetail, setUserDetail] = useState<IPatient|null>(null)
    const [message, setMessage] = useState<IMessage[]|null>(null)
    const {user,setUser} = useAuth();
    const [newMsg, setNewMsg] = useState<String>("")

    useEffect(()=>{
        console.log(user)
        if(userId == null){
            console.log("Opps...1")
            return
        }
        getPatientDetail(userId).then(userD => {
            setUserDetail(userD)
        })

        if(user == null){
            console.log("Opps...2")
            return
        }

        getConversation(userId, user.socialNr).then(m => {
            if(m == null){
                console.log("Opps...3")
                return;
            }
            setMessage(m)
        })
    },[])

    const onMessagePost = async() => {
        if(user == null || userId == null || message == null)
            return

        const m:IMessageCreate = {
            senderSocialNr: user.socialNr,
            receiverSocialNr: userId,
            description: newMsg,
        }

        await createMessage(m);

        getConversation(userId, user.socialNr).then(m => {
            if(m == null){
                return;
            }
            setMessage(m)
        })

        const input:HTMLInputElement|null = document.getElementById("input123") as HTMLInputElement;

        if(input == null)
            return;
        input.value = ""

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
                                    <p className='text-black ml-3 font-semibold'>Send message</p>
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
                                    <p className='text-[#6E6E6E] ml-3'>Conditions</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='border w-full ml-5 flex flex-col justify-end'>
                    <div className='px-7'>
                        {
                            message != null && user != null && (
                                message.map((m,i) => (
                                    m.senderSocialNr != user.socialNr ? (
                                        <div>
                                            <div key={i} className='bg-white inline-block p-5 rounded-lg max-w-xl mt-5'>
                                                <p className='text-sm text-[#6E6E6E]'>{m.receiverName}</p>
                                                <p>{m.content}</p>
                                                <p className='text-sm mt-4 text-[#6E6E6E]'>{convertDate(m.createdAt)}</p>
                                            </div>
                                        </div>
                                    ):(
                                        <div key={i} className='flex justify-end mt-5'>
                                            <div className='bg-[#3260FC] inline-block p-5 rounded-lg max-w-xl'>
                                                <p className='text-white'>{m.content}</p>
                                                <p className='text-sm mt-4 text-[#e8e8e8]'>{convertDate(m.createdAt)}</p>
                                            </div>
                                        </div>
                                    )
                                ))
                            )
                        }
                    </div>
                    <div className='px-10'>
                        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
                            <input id='input123' className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none w-full' placeholder='Message'  onChange={(e:ChangeEvent<HTMLInputElement>) => setNewMsg(e.target.value)}/>
                            <FontAwesomeIcon icon={faPaperPlane} color='#6E6E6E' onClick={onMessagePost}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default PatientMessage;