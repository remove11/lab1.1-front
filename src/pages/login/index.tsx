import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { getAccessToken, getUserInfo, setAuthToken } from '../../axios/auth';
import {useAuth} from "../../context/UserContext"
import { useNavigate } from "react-router-dom";



const Login: React.FC = () => {
  const {setUser} = useAuth();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")


  const onLogin = async (userName:string, password:string) => {
    const token = await getAccessToken(userName, password); 
    if(token == null){
      console.log("Opps...")
      return;
    }
  
    setAuthToken(token);
    const user = await getUserInfo();
    if(user == null){
      console.log("Opps...")
      return;
    }
  
    setUser(user);
    navigate("/app/patients")
  }
  
  
  return (
  <main className='flex justify-center items-center min-h-screen'>
    <section className='w-screen'>
      <div className='border w-[500px] px-16 py-9 rounded-3xl m-auto'>
        <h1 className='font-semibold text-3xl mb-6'>Dr.Smile X Login</h1>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faUser} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Username' onChange={(e:ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faUser} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Password'  onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
        </div>
        <div className='w-full flex justify-end my-5'>
          <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white' onClick={()=>onLogin(userName, password)}>Create Acount</button>
        </div>
        <Link to="/register">
          <p className='text-end text-sm text-[#6E6E6E]'>Create new account</p>
        </Link>
      </div>
    </section>
  </main>
  )
}

export default Login;
