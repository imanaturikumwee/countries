import React, { createContext, useState } from 'react';
import data from '../data/data.json'

export const CountryContext = createContext();

const CountryProvider = ({children})=>{

    // setting up region context (country continent)
    const [region, setRegion]= useState("");
    const chooseRegion=(region)=>{
        setRegion(region)
        toggleFilter()
    }

    //filter context (show or hid filter)
    const [showFiliter, setShowFilter]=useState(false)
    const toggleFilter=()=>{
        if (showFiliter){
            setShowFilter(false)
        }else{
            setShowFilter(true)
        }
    }

    // set country details
    const [country, setCountry]= useState(data[1]);
    const chooseCountry=(cntry)=>{
        setCountry(cntry)
        toggleDetails()
    }

    // context for showing the country details
    const [details, setDetails] = useState(false);
    const toggleDetails=()=>{
        if (details){
            setDetails(false)
        }else{
            setDetails(true)
        }
    }
    
    const [dark, setDark]=useState(false)
    const toggleDark=()=>{
        if(dark){
            setDark(false)
        }else{
            setDark(true)
        }
    }


    return(
        <CountryContext.Provider value={{region, chooseRegion, showFiliter,
                                         toggleFilter, country, chooseCountry,
                                         details, toggleDetails, dark, toggleDark,
                                         }}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryProvider;