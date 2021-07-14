import React,{useEffect, useState} from 'react';
import './App.css';
import Navabar from './components/navbar/Navbar'
import SerchBar from './components/serchbar/SerchBar';
import Container from './components/container/Container';
import Loading from './components/loading/Loading';
import Footer from './components/footer/Footer';
import {getPokemons, pokemonData, searchPokemon} from './utils/Utils';

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading ] =useState(true)
  const [page, setPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false)


  const fetchPokemons = async ()=>{
    let max=5
    try {
      const data = await getPokemons(max,max * page)
      const promises =data.results.map(async (pokemon)=>{
        return(
          await pokemonData(pokemon.url)
        )
      })

     const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal( Math.ceil(data.count / max))
      setNotFound(false)
    } catch (e) {
      console.log(e);
    }
  }

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }

    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  };

  useEffect(()=>{
    if(!searching){
    fetchPokemons()
    } 
  },[page])

  return (    
      <>        
        <Navabar />
        <div className='App'>
          <SerchBar onSearch={onSearch}/>
          {loading && !notFound? <Loading /> :
            <Container 
              pokemons={pokemons}
              page={page}
              total={total}
              setTotal={setTotal}
              setPage={setPage} />
          }
          <Footer />

        </div>
       </>
  );
}


export default App;
