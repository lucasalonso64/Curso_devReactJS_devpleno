import React, { useState, useEffect } from 'react';
import './App.css';

const MostraVoltas = (props) => {
  return (
    <p>
      {props.voltas}<br />
      Voltas
  </p>

  )
}
const MostraTempo = (props) => {
  return(
    <p>
    {props.tempo}<br />
     Tempo médio por volta
 </p>
  )
}
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  const [numVoltas, setNumVoltas]  = useState(14) 
  const [ tempo, setTempo ] = useState(0)

  useEffect(() => {
    setInterval(() => {
      console.log('Chamou')
    }, 1000)
    
  }, [])


  const increment = () => {
    setNumVoltas(numVoltas + 1)  
    
  }

  const decrement = () => {
    setNumVoltas(numVoltas - 1)  
    
  }
  return (
    <div>
      <MostraVoltas voltas={numVoltas}/>
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
      <MostraTempo tempo={tempo}/>

      <Button text='Iniciar' />
      <Button text='Reiniciar' />

    </div>
  );
}

export default App;
