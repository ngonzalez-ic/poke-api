import React,{useEffect, useState} from 'react';
import './App.css';
import Navabar from './components/navbar/Navbar'
import SerchBar from './components/serchbar/SerchBar';
import Container from './components/container/Container';
import {getPokemons, pokemonData} from './utils/Utils';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState( )
  const fetchPokemons = async ()=>{
    let max=6
    let ini=0
    try {
      const data = await getPokemons(max,ini *page)
      const promises =data.results.map(async (pokemon)=>{
        return(
          await pokemonData(pokemon.url)
        )
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchPokemons()
  },[page])

  return (
    <div>
      <Navabar />
      <div className='App'>
        <SerchBar />
        <Container 
        pokemons={pokemons}
        page={page}
        setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
