import React,{useState} from 'react'
import BgImg from '../../images/bg-pattern-card.svg'
import Ball from '../../images/buttom/pokeball.png'
import PropTypes from 'prop-types';

const Card =(props)=>{
  const { pokemon }=props
  const [ footer, setfooter] = useState(true)
  const handleOnClick = ()=>{
    if(footer===true){
      setfooter(false)
    }
    else{
      setfooter(true)
    }
  }

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
    <button 
    className='ball-button'
    onClick={handleOnClick}>
    <img src={Ball}/>    
    </button>
    {footer ? <> </> :
    <div className="card-footer">
      <div className="card-footer-social">
       {pokemon.types.map((type,id)=>{
            return(
              <h3 key={id} className="pokemon-type-text">
                {type.type.name}
        </h3>
        
            )
          })}
        <p>Type</p>
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
}
  </div>
 
    ) 
}

Card.propTypes = {
  pokemon: PropTypes.object
}

export default  Card
