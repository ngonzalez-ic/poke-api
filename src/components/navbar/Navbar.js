import React,{useContext} from 'react'
import LogoAPI from '../../images/logo.png'
import FavoriteContext from '../../contexts/favoriteContext';

export default function Navabar() {
  const { favoritePokemons } = useContext(FavoriteContext);

  return (
    <nav>
      <img 
        className='navbar-image'
        src={LogoAPI} />
      <div className='heard'>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
}
