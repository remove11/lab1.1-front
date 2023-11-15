import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faCalendarPlus, faComment, faHospitalUser, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const PatientObservation: React.FC = () => {
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
                                    <p className='text-[#6E6E6E] ml-3'>Send message</p>
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
                                    <p className='text-black ml-3 font-semibold'>Observations</p>
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
                        <div className=''>
                            <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white'>New Observation</button>
                        </div>
                    </div>
                    <div className='mx-8 my-6'>
                        <p>Time: {"2013-12-30 12:30"}</p>
                        <p className='mt-1'>Subject: {"Check the brutten leg"}</p>
                        <p className='text-[#3260FC] mt-10 font-semibold'>Observations</p>
                        <div className='mt-5'>
                            <div className='flex'>
                                <p>2013-12-30 12:30</p>
                                <p className='ml-10'>Left leg looking good</p>
                            </div>
                            <p className='text-sm text-[#6E6E6E] mt-1'>Dr.Fredholm</p>
                        </div>
                        <div className='mt-5'>
                            <div className='flex'>
                                <p>2013-12-30 12:30</p>
                                <p className='ml-10'>Left leg looking good</p>
                            </div>
                            <p className='text-sm text-[#6E6E6E] mt-1'>Dr.Fredholm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default PatientObservation;