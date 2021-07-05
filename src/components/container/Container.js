import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) =>{
    const {pokemons} = props
     return(
        <>
            <div className='header'>
                Pokedex
            </div>
            <div className='pokedex-grid'>
                {!pokemons ?'no hay pokemones': 
               pokemons.map((pokemon,id)=>{
                   return(
                       <div key={id}>{pokemon.name}</div>
                   )
               })
               }
            </div>
            <div>

            </div>
        </>
    )
}

Container.propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    )
};

export default Container