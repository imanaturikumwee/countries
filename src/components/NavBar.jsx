import React,{useContext} from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { MdLightMode } from "react-icons/md";
import { CountryContext } from '../context/countryContext';

function NavBar() {
  const {region, chooseRegion, showFiliter, toggleFilter, dark, toggleDark}=useContext(CountryContext)
  return (
    <nav className={`flex justify-between md:px-[4rem] md:py-[2rem] ${dark? 'bg-dark-blue-elem': 'bg-white'}`}>
        <div>Where is the World?</div>
        <div  onClick={()=>toggleDark()} className=' cursor-pointer' >
            <div className={` ${!dark? 'flex': 'hidden'} gap-[1rem] items-center`}>
              <span><IoMoonOutline /></span> 
              <span>Dark Mode</span>
            </div>
            <div className={`${dark? 'flex': 'hidden'}  gap-[1rem] items-center`}>
              <span><MdLightMode /></span> 
              <span>Light Mode</span>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
