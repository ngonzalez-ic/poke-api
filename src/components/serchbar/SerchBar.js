import React, {useState} from 'react'
import PropTypes from 'prop-types';

const SerchBar = (props) => {
  const { onSearch } = props
  const [pokemon, setPokemon]= useState()

  const handleClick = async () =>{
    onSearch(pokemon)
          
  }
  const handleOnChange = (e)=>{
    setPokemon(e.target.value)
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  }
  return(
    <div className='serchbar-container'>
      <div className='serchbar'>
        <input type='text' 
          onChange={handleOnChange}
          maxLength='15'
          minLength='4'

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
SerchBar.propTypes = {
  onSearch: PropTypes.func
}

export default SerchBar