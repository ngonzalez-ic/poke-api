import React,{useEffect, useState} from 'react';
import './App.css';
import Navabar from './components/navbar/Navbar'
import SerchBar from './components/serchbar/SerchBar';
import Container from './components/container/Container';
import {getPokemons} from './utils/Utils';

function App() {
  const [pokemons, setPokemons] = useState([])
  const fetchPokemons = async ()=>{
    try {
      const data = await getPokemons()
      setPokemons(data.results)
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    fetchPokemons()
  },[])

  return (
    <div>
      <Navabar />
      <div className='App'>
        <SerchBar />
        <Container pokemons={pokemons} />
      </div>
    </div>
  );
}

export default App;
