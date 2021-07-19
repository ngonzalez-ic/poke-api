import React, { useState } from "react"
import ContextApi from './contextApi'

const GlobalState =()=> {
    const [lang, setLang]= useState('es')

    const handleLang =()=>{
      if(lang==='es'){
        setLang('en')
        localStorage.setItem('languaje',lang)
      }
      else{
        setLang('es')
        localStorage.setItem('languaje',lang)
      }
    }
  console.log(lang);
        return(
            <ContextApi.Provider
                value={{
                    lang}}
            >
                <button onClick={handleLang}>idioma</button>
            </ContextApi.Provider>
        )
    
}
export default GlobalState