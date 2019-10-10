import React from 'react';
import logo from './logo.svg';
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
const Button = (props) => <button>{props.text}</button>

function App() {
  return (
    <div>
      <MostraVoltas voltas='15' />

      <Button text='+' />
      <Button text='-' />
      <MostraTempo tempo='01:35' />

      <Button text='Iniciar' />
      <Button text='Reiniciar' />

    </div>
  );
}

export default App;
