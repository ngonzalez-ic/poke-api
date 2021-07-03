import React, {useState} from 'react'

const SerchBar = () => {
    const [serch, setSerch]=useState('')
    const handleClick = () =>{

    }
    const handleOnChange = (e)=>{
            setSerch(e.target.value)
            console.log(serch)
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
       </div>
    )
}

export default SerchBar