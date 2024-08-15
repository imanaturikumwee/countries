import React, {useContext} from 'react'
import Header from './Header'
import Country from './Country'
import data from '../data/data.json'
import { CountryContext } from '../context/countryContext'
import CountryDetails from './CountryDetails'

function Home() {
    
    const {region, chooseRegion, country, chooseCountry, details, toggleDetails, dark, toggleDark}= useContext(CountryContext)
    if(region !==""){
        const filterdCountries = data.filter((country)=> country.region ===region)
        return(
            <div className={`${dark? ' bg-dark-blue-bg text-white': 'bg-light-gray-bg text-dark-blue-text'} pb-[2rem]`}>
                <div className={`${dark? ' bg-dark-blue-bg text-white': 'bg-light-gray-bg text-dark-blue-text'} ${details? 'hidden': 'block' }`}>
                    <Header/>
                    <div className=' mx-[4rem] grid gap-y-[3rem] grid-cols-1  md:text-left md:grid-cols-4 justify-between'>
                    {
                            filterdCountries.map((country, index )=>{
                                return(
                                    <div key={index} onClick={()=>chooseCountry(country)} className=' cursor-pointer '>
                                        <Country data={country}/>
                                    </div>
                                )
                            })
                        }
                    
                    </div>
                
                </div>
                <CountryDetails data={country}/>
            </div>

        )
    }
    else {
       return (
            <div className={`${dark? ' bg-dark-blue-bg text-white': 'bg-light-gray-bg text-dark-blue-text'} pb-[2rem]`}>
                <div className={` ${dark? ' bg-dark-blue-bg text-white': 'bg-light-gray-bg text-dark-blue-text'} ${details? 'hidden': 'block' }`}>
                    <Header/>
                    <div className=' mx-[4rem] grid gap-y-[3rem] grid-cols-1  md:text-left md:grid-cols-4 justify-between'>
                    {
                            data.map((dat, index )=>{
                                return(
                                    <div key={index} onClick={()=>chooseCountry(dat)} className=' cursor-pointer '>
                                        <Country data={dat}/>
                                    </div>
                                )
                            })
                        }
                    
                    </div>
                </div>
                <CountryDetails data={country}/>
            </div>
        )
    }
}
export default Home
