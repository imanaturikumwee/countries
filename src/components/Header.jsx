import React, {useContext} from 'react';
import { CountryContext } from '../context/countryContext';
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import NavBar from './NavBar';


function Header() {
    const {region, chooseRegion, showFiliter, toggleFilter, dark}=useContext(CountryContext)
  return (
    <div className=' w-full  '>
        <NavBar/>
        <div className='flex justify-between md:my-[3rem] md:mx-[4rem] '>
            <div className={`${dark? 'bg-dark-blue-elem text-white': 'bg-white'} px-[2rem] flex items-center gap-[2rem] w-[400px] rounded-md`}>
                <label htmlFor="search"><IoIosSearch /></label>
                <input type="search" name="search" id="search" placeholder=' Search for a country...' className={`${dark? ' bg-dark-gray-inp text-white placeholder-white': 'bg-white placeholder-dark-gray-inp'} rounded-md focus:outline-none px-[.5rem] py-[.1rem] `} />
            </div>
            <div className='mx-[1.2rem]'>
                <div onClick={()=>toggleFilter()} className={`cursor-pointer ${dark? 'bg-dark-blue-elem': 'bg-white'} px-[2rem] py-[1rem] flex items-center gap-[1rem] rounded-md`}>
                    <p>filter by Region</p> 
                    <span className={`${showFiliter? "block": "hidden"}`}><IoIosArrowDown /></span> 
                    <span className={`${!showFiliter? "block": "hidden"}`}><IoIosArrowUp /></span>
                </div>
                <div className={`absolute top-[200px] right-[5.2rem] px-[4.4rem] ${dark? 'bg-dark-blue-elem': 'bg-white'} py-[1rem] ${showFiliter? "block":'hidden'} rounded-md`}>
                    <p className=' cursor-pointer' onClick={()=>chooseRegion("Africa")}>Africa</p>
                    <p className=' cursor-pointer' onClick={()=>chooseRegion("Americas")}>Americas</p>
                    <p className=' cursor-pointer' onClick={()=>chooseRegion("Asia")}>Asia</p>
                    <p className=' cursor-pointer' onClick={()=>chooseRegion("Europe")}>Europe</p>
                    <p className=' cursor-pointer' onClick={()=>chooseRegion("Oceania")}>Oceania</p>
                    <p className=' cursor-pointer' onClick={()=>chooseRegion("")}>None</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Header
