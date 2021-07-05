import React,{useEffect, useState} from 'react';
import './App.css';
import Navabar from './components/navbar/Navbar'
import SerchBar from './components/serchbar/SerchBar';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import {getPokemons, pokemonData} from './utils/Utils';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0);

  const fetchPokemons = async ()=>{
    let max=5
    let ini=0
    try {
      const data = await getPokemons(max,ini)
      const promises =data.results.map(async (pokemon)=>{
        return(
          await pokemonData(pokemon.url)
        )
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setTotal( Math.ceil(data.count / max))
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchPokemons()
  },[page])

  return (
    <>
      <Navabar />
      <div className='App'>
        <SerchBar />
        <Container 
        pokemons={pokemons}
        page={page}
        total={total}
        setTotal={setTotal}
        setPage={setPage} />
      </div>
      <Footer />
    </>
  );
}

export default App;
