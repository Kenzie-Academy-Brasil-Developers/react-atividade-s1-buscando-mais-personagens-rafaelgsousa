import './App.css';

import { useState, useEffect } from 'react';

import Characters from './Componentes/Characters';


function App() {

  const [caracterList, setCaracterList] = useState([])

  const [page,setPage] = useState(1)

  const [next,setNext] = useState([])

  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>response.json())
    .then((response)=>setCaracterList(response.results))
    .catch(((err)=>console.log(err)))
  },[])

  console.log(caracterList)
  return (
    <div className="App">
      <header className="App-header">
      <Characters personagens={caracterList}/>
      </header>
    </div>
  );
}

export default App;
