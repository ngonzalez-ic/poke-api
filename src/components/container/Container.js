import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/Card';
import Pagination from '../pagination/Pagination';

const Container = (props) =>{
    const {pokemons, page, setPage, total} = props
    
  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage)
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage)
  }
     return(
        <>
            <div className='header'>
                <Pagination 
                page={page + 1}
                totalPages={total}
                onLeftClick={lastPage}
                onRightClick={nextPage}
                />
            </div>
            <div className='pokedex-grid'>
                {!pokemons ? 'no hay pokemons': 
               pokemons.map((pokemon,id)=>{
                   return(
                       <Card pokemon={pokemon} key={id}/>
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
    pokemons: PropTypes.arrayOf,
    page:PropTypes.elementType,
    setPage:PropTypes.elementType,
    total:PropTypes.elementType   
}

export default Container