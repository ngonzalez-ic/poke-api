import React from 'react'
import BgImg from '../../images/bg-pattern-card.svg'
import PropTypes from 'prop-types';

const Card =(props)=>{
  const { pokemon }=props

  return(
     <div className="card">
    <img
      src={BgImg}
      className="card-header"
    />
    <div className="card-body">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="card-body-img"
      />
      <h1 className="card-body-title">
        
        <span>{pokemon.name}</span>
      </h1>
      <p className="card-body-text"># {pokemon.id}</p>
    </div>
    <div className="card-footer">
      <div className="card-footer-social">
       {pokemon.types.map((type,id)=>{
            return(
              <h3 key={id} className="pokemon-type-text">
                {type.type.name}
        </h3>
        
            )
          })}
        <p>Ataque</p>
      </div>
      <div className="card-footer-social">
        <h3>803K</h3>
        <p>Ataque Especial</p>
      </div>
      <div className="card-footer-social">
        <h3>1.4K</h3>
        <p>Defensa</p>
      </div>
    </div>
  </div>
 
    ) 
}

Card.propTypes = {
  pokemon: PropTypes.object
}

export default  Card
