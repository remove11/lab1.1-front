import React, { useState } from 'react';
import { faHospitalUser, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const colorBlue = "#3260FC"
const colorGrey = "#6E6E6E"

const Patient: React.FC = () => {
    const [activeNavIdx, setActiveNavIdx] = useState(0)
    const [activeSortIdx, setActiveSortIdx] = useState(1)
  return (
    <main>
        <div className="max-w-[1300px] min-h-[400px] border rounded-3xl m-auto">
            <div className='border-b flex justify-between items-center'>
                <div className='flex'>
                    <div className={`flex py-9 ml-9  ${activeNavIdx == 0 && "border-b-2 border-[#3260FC]"} px-3`}>
                        <FontAwesomeIcon icon={faHospitalUser} size='xl' color={activeNavIdx == 0 ? colorBlue : colorGrey}/>
                        <p className={`text-[${activeNavIdx == 0 ? colorBlue : colorGrey}] text-xl ml-4`}>Patients</p>
                    </div>
                    <div className={`flex py-9 ml-9  ${activeNavIdx == 1 && "border-b-2 border-[#3260FC]"} px-3`}>
                        <FontAwesomeIcon icon={faUserNurse} size='xl' color={activeNavIdx == 1 ? colorBlue : colorGrey}/>
                        <p className={`text-[${activeNavIdx == 1 ? colorBlue : colorGrey}] text-xl ml-4`}>Employees</p>
                    </div>
                </div>
                <div className='mr-9'>
                    <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white'>Create Acount</button>
                </div>
            </div>
            <div className='border-b flex justify-end items-center'>
                <div className='flex mr-10'>
                    <p className="text-[#6E6E6E] font-medium">Sort by:</p>
                    <p className={activeSortIdx == 0 ? 'text-black font-medium ml-3 underline' : 'text-[#6E6E6E] font-medium ml-3'}>name</p>
                    <p className={activeSortIdx == 1 ? 'text-black font-medium ml-3 underline' : 'text-[#6E6E6E] font-medium ml-3'}>created</p>
                </div>
                <div className='w-80 mr-9'>
                    <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-md items-center my-7'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} color='#6E6E6E'/>
                        <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Search'/>
                    </div>
                </div> 
            </div>
            <div className='px-9'>
                <div className='grid grid-cols-12 my-7 gap-x-2 gap-y-6'>
                    <div className='col-span-1'>
                        <p className='col-span-1 text-[#3260FC]'>Avatar</p>
                    </div>
                    <div className='col-span-11 grid grid-cols-11 gap-2'>
                        <p className='col-span-3 text-[#3260FC] ml-12'>Name</p>
                        <p className='col-span-3 text-[#3260FC]'>Social number</p>
                        <p className='col-span-3 text-[#3260FC]'>Phone number</p>
                        <p className='col-span-1 text-[#3260FC]'>Age</p>
                    </div>
                </div>
                <div className='grid grid-cols-12 my-7  gap-x-2 gap-y-6'>
                    <div className='bg-white col-span-1 h-24 rounded-md flex justify-center items-center'>
                        <FontAwesomeIcon icon={faCircleUser} size='4x' scale={2} color='#6E6E6E'/>
                    </div>
                    <div className='bg-white col-span-11 grid grid-cols-11 gap-2 h-24 items-center'>
                        <Link to="/app/user/encounters" className='col-span-3 ml-12'>
                            <p>Alex Fredholm</p>
                        </Link>
                        <p className='col-span-3'>000507-4018</p>
                        <p className='col-span-3'>(+46) 729444345</p>
                        <p className='col-span-1'>23</p>
                        <div className='col-span-1'>
                            <div className='border w-10 h-10 rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faEllipsisVertical} color='#6E6E6E'/>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white col-span-1 h-24 rounded-md flex justify-center items-center'>
                        <FontAwesomeIcon icon={faCircleUser} size='4x' scale={2} color='#6E6E6E'/>
                    </div>
                    <div className='bg-white col-span-11 grid grid-cols-11 gap-2 h-24 items-center'>
                        <Link to="/app/user/encounters" className='col-span-3 ml-12'>
                            <p>Alex Fredholm</p>
                        </Link>
                        <p className='col-span-3'>000507-4018</p>
                        <p className='col-span-3'>(+46) 729444345</p>
                        <p className='col-span-1'>23</p>
                        <div className='col-span-1'>
                            <div className='border w-10 h-10 rounded-full flex justify-center items-center'>
                                <FontAwesomeIcon icon={faEllipsisVertical} color='#6E6E6E'/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </main>
  )
}

export default Patient;