import React from 'react'
import PropTypes from 'prop-types';

const Card =(props)=>{
  const { pokemon }=props

  return(
    <div className='pokemon-card'>
      <div className='pokemon-img-container'>
        <img 
          className='pokemon-img'
          src={pokemon.sprites.front_default}
          alt={pokemon.name}/>
      </div>
      <div className='card-body'>
        <div className='card-top'>
          <h3>
            {pokemon.name}
          </h3>
        </div>
        <div>
          {pokemon.id}
        </div>

        <div className='card-bottom'>
          <div className="pokemon-type">    
            {pokemon.types.map((type,id)=>{
              return(
                <div key={id} className="pokemon-type-text">
                  {type.type.name}
                </div>
              )
            })}
          </div>
         
        </div>

      </div>
    </div>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object
}

export default  Card
