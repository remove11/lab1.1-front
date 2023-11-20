import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Navbar() {
  const [navIdx, setNavIdx] = useState(0)
  return (
    <nav className="border-b mb-5">
      <div className="max-w-[1300px] flex justify-between py-7 mx-auto">
        <div className="flex items-center">
          <h2 className="font-semibold text-5xl">Dr.Smile</h2>
          <NavLink to="/app/patients" className={navIdx==0?"text-2xl font-medium ml-20 underline":"text-2xl font-medium ml-20 text-[#6E6E6E]"}>People</NavLink>
          <NavLink to="/app/encounters" className={navIdx==1?"text-2xl font-medium ml-20 underline":"text-2xl font-medium ml-20 text-[#6E6E6E]"}>Encounters</NavLink>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCircleUser} size="xl" color="#6E6E6E"/>
          <p className="ml-2">Alexander</p>
          <div className='ml-3'>
              <div className='border w-10 h-10 rounded-full flex justify-center items-center'>
                  <FontAwesomeIcon icon={faBell} color='#6E6E6E'/>
              </div>
          </div>
          <div className='ml-3'>
              <div className='border w-10 h-10 rounded-full flex justify-center items-center'>
                  <FontAwesomeIcon icon={faComment} color='#6E6E6E'/>
              </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
