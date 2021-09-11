import './App.css';

import { useState, useEffect } from 'react';

import Characters from './Componentes/Characters';


function App() {

  const [caracterList, setCaracterList] = useState([])

  const [page,setPage] = useState(1)

  //const [next,setNext] = useState([])
  //Eu havia criado a next e feito outro useEffect por que foi isso
  // que entendi da entrega quando fala que deveria ter outro useEffect
  //com a proxima pagina salva para ser usada.

  const [botaonext,setBotaonext]= useState("Proxima página")

  /*useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character?page=${page+1}`)
    .then((response)=>response.json())
    .then((response)=>setNext(response.results))
    .catch(((err)=>console.log(err)))
  },[page])*/

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then((response)=>response.json())
    .then((response)=>setCaracterList(response.results))
    .catch(((err)=>console.log(err)))
  },[page])

  function nextPage (){
    if(page<34){
      //console.log("next:",next)
      setPage(page+1)
      //setCaracterList(next)      
    } else {
      setBotaonext("Essa é a última página")
    }
    
  }
  

  return (
    <div className="App">
      <header className="App-header">
      <Characters personagens={caracterList}/>
      <p onClick={nextPage} className="link">{botaonext}</p>
      </header>
    </div>
  );
}

export default App;
