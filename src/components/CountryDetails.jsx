import React, {useContext}  from 'react';
import NavBar from './NavBar';
import dat from '../data/data.json';
import { FaArrowLeftLong } from "react-icons/fa6";
import { CountryContext } from '../context/countryContext';

function CountryDetails({data}) {
    const {region, chooseRegion, country, chooseCountry, details, toggleDetails, dark, toggleDark}= useContext(CountryContext)

  return (
    <div className={`${details? 'block': 'hidden'} ${dark? 'bg-dark-blue-bg text-white': 'bg-light-gray-bg'} `}>
        <NavBar/>
        <div className={`mx-[4rem] py-[2rem]`}>
            <div className=' flex gap-[1rem] items-center my-[3rem] cursor-pointer' onClick={()=>toggleDetails()}> 
                <span><FaArrowLeftLong /></span>
                <span>Back</span>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-full items-center'>
                <div className='w-[45%] rounded-md'>
                    <img src={data?.flags.svg} alt={data?.name} className=' rounded-md h-[401px]' />
                </div>
                <div className='w-[45%]'>
                    <div className=' flex flex-col md:flex-row justify-between md:gap-[6rem]  w-full items-center'>
                        <div>
                            <h1>{data?.name} </h1>
                            <p>Native name: {data?.nativeName}</p>
                            <p>Population: {data?.population.toLocaleString("en-US")}</p>
                            <p>Region: {data?.region}</p>
                            <p>Sub region: {data?.subregion}</p>
                            <p>Capital: {data?.capital} </p>
                        </div>
                        <div>
                            <p>Top level domain: {data?.topLevelDomain} </p>
                            <p>Currenies: {data?.currencies[0].name} </p>
                            <p>Languages: {data?.languages.map(lan=>lan.name).join(", ")} </p>
                        </div>
                    </div>
                    <div className=' flex flex-col gap-[.5rem] my-[2rem] '>
                        <p className=''>Border countries: </p>
                        <div className=' flex flex-wrap items-center gap-[.5rem]'>
                        {
                               data?.borders?.map((country, index)=>{
                                    
                                const border = dat?.filter(cntry=>cntry.alpha2Code===country|| cntry.alpha3Code===country);
                                return (
                                    <p key={index} className={`${dark? 'bg-dark-blue-elem': 'bg-white'} px-[.5rem] py-[.2rem]`}>{border[0]?.name.split('(')[0]}</p>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default CountryDetails
