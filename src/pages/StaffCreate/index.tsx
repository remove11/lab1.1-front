import React, { ChangeEvent, useState } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";
import { IDoctorCreate, createDoctor } from '../../axios/doctors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createStaff } from '../../axios/staff';





const StaffCreate: React.FC = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [surename, setSurename] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [adress, setAdress] = useState("")
  const [socialNr, setSocialNr] = useState("")
  const [phoneNr, setPhoneNr] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [calenderId, setCalenderId] = useState("")


  const onLogin = async () => {
    const data:IDoctorCreate = {
      username: userName,
      password: password,
      surename: surename,
      email: email,
      lastname: lastname,
      adress: adress,
      socialNr: socialNr,
      phoneNr: phoneNr,
      gender: "MAN",
      createdAt: "2023-11-16T21:23:29.086Z",
      employeeId: employeeId,
      degreeId: "NodegId",
      type: "patient",
      getCalenderId: calenderId
    }

    createStaff(data).then(res => {
      const authToken = Cookies.get("Authorization")
      if(res && authToken) navigate("/app/staff")
    })
  }



  return (
  <main className='flex justify-center items-center min-h-screen'>
    <section className='w-screen'>
      <div className='border w-[500px] px-16 py-9 rounded-3xl m-auto'>
        <h1 className='font-semibold text-3xl mb-6'>Dr.Smile X Register</h1>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faUser} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Username'  onChange={(e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faLock} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Password' onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Surename' onChange={(e:ChangeEvent<HTMLInputElement>) => setSurename(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Lastname' onChange={(e:ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Email' onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Adress' onChange={(e:ChangeEvent<HTMLInputElement>) => setAdress(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Social number' onChange={(e:ChangeEvent<HTMLInputElement>) => setSocialNr(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Phone number' onChange={(e:ChangeEvent<HTMLInputElement>) => setPhoneNr(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='EmployeeId' onChange={(e:ChangeEvent<HTMLInputElement>) => setEmployeeId(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Calender Id' onChange={(e:ChangeEvent<HTMLInputElement>) => setCalenderId(e.target.value)}/>
        </div>
        <div className='w-full flex justify-end my-5' onClick={onLogin}>
          <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white'>Resigter Acount</button>
        </div>
        <Link to="/login">
          <p className='text-end text-sm text-[#6E6E6E]'>Login with existing acount</p>
        </Link>
      </div>
    </section>
  </main>
  )
}

export default StaffCreate;
