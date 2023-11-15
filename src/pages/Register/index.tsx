import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'





const Register: React.FC = () => {
  return (
  <main className='flex justify-center items-center min-h-screen'>
    <section className='w-screen'>
      <div className='border w-[500px] px-16 py-9 rounded-3xl m-auto'>
        <h1 className='font-semibold text-3xl mb-6'>Dr.Smile X Login</h1>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faUser} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Username'/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faLock} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Password'/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Password'/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Password'/>
        </div>
        <div className='flex w-full bg-white py-3 px-4 rounded-full shadow-lg items-center my-7'>
          <FontAwesomeIcon icon={faCircleInfo} color='#6E6E6E'/>
          <input className='border-transparent focus:border-transparent focus:ring-0 focus:outline-none ml-3' placeholder='Password'/>
        </div>
        <div className='w-full flex justify-end my-5'>
          <button className='px-6 py-3 rounded-full bg-[#3260FC] text-white'>Create Acount</button>
        </div>
        <p className='text-end text-sm text-[#6E6E6E]'>Create new account</p>
      </div>
    </section>
  </main>
  )
}

export default Register;
