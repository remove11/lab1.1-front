import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faCalendarPlus, faComment, faHospitalUser, faLocationDot, faPaperPlane, faUser } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const PatientMessage: React.FC = () => {
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
                        <p className='font-medium mt-4'>Alex Fredholm</p>
                        <p className='text-[#6E6E6E] mb-10'>Patient</p>
                        <div>
                            <div className='flex items-center'>
                                <FontAwesomeIcon icon={faEnvelope} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>Danxawe@gmail.com</p>
                            </div>
                            <div className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faPhone} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>(+64) 0729444345</p>
                            </div>
                            <div className='flex items-center mt-4'>
                                <FontAwesomeIcon icon={faLocationDot} color='#6E6E6E' size='lg'/>
                                <p className='text-[#6E6E6E] ml-3'>Norra världen</p>
                            </div>
                        </div>
                    </div >
                    <div  className='flex flex-col items-center max-w-sm bg-white p-10 border-t'>
                        <div className='w-44'>
                            <Link to="/app/user/messages">
                                <div className='flex items-center'>
                                    <FontAwesomeIcon icon={faComment} color='#6E6E6E' size='lg'/>
                                    <p className='text-black ml-3 font-semibold'>Send message</p>
                                </div>
                            </Link>
                            <Link to="/app/user/encounters">
                                <div className='flex items-center mt-4'>
                                    <FontAwesomeIcon icon={faHospitalUser} color='#6E6E6E' size='lg'/>
                                    <p className='text-[#6E6E6E] ml-3'>Encounters</p>
                                </div>
                            </Link>
                            <Link to="/app/user/observations">
                                <div className='flex items-center mt-4'>
                                    <FontAwesomeIcon icon={faCalendarPlus} color='#6E6E6E' size='lg'/>
                                    <p className='text-[#6E6E6E] ml-3'>Observations</p>
                                </div>
                            </Link>
                            <Link to="/app/user/conditions">
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
                        <div className='bg-white inline-block p-5 rounded-lg max-w-xl mt-5'>
                            <p className='text-sm text-[#6E6E6E]'>Dr.Fred</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <p className='text-sm mt-4 text-[#6E6E6E]'>2013-12-30 12:30</p>
                        </div>
                        <div className='flex justify-end mt-5'>
                            <div className='bg-[#3260FC] inline-block p-5 rounded-lg max-w-xl'>
                                <p className='text-white'>Lorem Ipsum is simply dummy text of the printing this.</p>
                                <p className='text-sm mt-4 text-[#e8e8e8]'>2013-12-30 12:30</p>
                            </div>
                        </div>
                        <div className='bg-white inline-block p-5 rounded-lg max-w-xl mt-5'>
                            <p className='text-sm text-[#6E6E6E]'>Dr.Fred</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            <p className='text-sm mt-4 text-[#6E6E6E]'>2013-12-30 12:30</p>
                        </div>
                    </div>
                    <div className='px-10'>
                        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
                            <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none w-full' placeholder='Username'/>
                            <FontAwesomeIcon icon={faPaperPlane} color='#6E6E6E'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default PatientMessage;