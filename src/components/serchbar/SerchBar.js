import React, {useState} from 'react'
import { sertchPokemon } from '../../utils/Utils'

const SerchBar = () => {
    const [serch, setSerch]=useState('')
    const [pokemon, setPokemon]= useState()

    const handleClick = async () =>{
          const data = await sertchPokemon(serch)
          setPokemon(data)
          console.log( pokemon.name);
          
    }
    const handleOnChange = (e)=>{
            setSerch(e.target.value)
    }
    return(
       <div>
        <input type='text' 
            placeholder='Serch Poke'
            onChange={handleOnChange}

        />
        <button
            onClick={handleClick}
        >
            Serch
        </button>
        <div>

            aca va pokemon
        </div>
       </div>
    )
}

export default SerchBar