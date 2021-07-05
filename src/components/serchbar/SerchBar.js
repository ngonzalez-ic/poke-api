import React, {useState} from 'react'
import { sertchPokemon } from '../../utils/Utils'

const SerchBar = () => {
    const [serch, setSerch]=useState('')
    const [pokemon, setPokemon]= useState()

    const handleClick = async () =>{
          const data = await sertchPokemon(serch)
          setPokemon(data)
          console.log( pokemon);
          
    }
    const handleOnChange = (e)=>{
            setSerch(e.target.value)
    }
    return(
        <div className='serchbar-container'>
            <div className='serchbar'>
                <input type='text' 
                    placeholder='Serch Poke'
                    onChange={handleOnChange}

                />
             </div>
            <div className='serchbar-btn'>
                <button 
                    onClick={handleClick}>
                    Serch
                </button>
            </div>
       </div>
    )
}

export default SerchBar