import React, {useContext} from 'react';
import { CountryContext } from '../context/countryContext'

function Country({data}) {
  const {region, chooseRegion, country, chooseCountry, details, toggleDetails, dark, toggleDark}= useContext(CountryContext)
  return (
    <div className=' w-[264px] h-[336ppx]'>
        <div className='w-[264px] h-[160px] rounded-t-md'>
            <img src={data.flags.png} alt={data.name} className='w-[264px] h-[160px] rounded-t-md' />
        </div>
        <div className={`px-[2rem] ${dark? ' bg-dark-blue-elem text-white': 'bg-white text-dark-blue-text'} rounded-b-md`}>
            <h3>{data.name.split(/[,(]/g)[0]}</h3>
            <div >
                <p><span>Population</span>: {data.population.toLocaleString("en-US")}</p>
                <p><span>Region</span>: {data.region}</p>
                <p><span>Capital</span>: {data.capital}</p>
            </div>
        </div>
      
    </div>
  )
}

export default Country
