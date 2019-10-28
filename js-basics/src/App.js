import React, {useState, useEffect } from 'react';
import Header from './Header'
import { resolve } from 'path';
import { reject } from 'q';

// Funções que retorna uma promessa 

const setTimeoutPromise = (time, text) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(text)
    resolve(text)
  }, time)
})

const func = async () => {
 const text1 = await setTimeoutPromise(2000, 'olá 1')
  console.log('text1', tex)
  await setTimeoutPromise(1000, 'ola 2')
}

const App = () => {
  const [counter, setCounter ] = useState(0)
  useEffect(() => {
    func()
    /*
    setTimeout(() => {
      console.log('olá!')
    },2000)
   */
  /*
  setTimeoutPromise(2000, 'Olá 1')
    .then(() => setTimeoutPromise(1000, 'olá 2'))
    .then(() => setTimeoutPromise(1000, 'olá 2'))
    .then(() => setTimeoutPromise(1000, 'olá 2'))
    */
  })


 // const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div>
      {/* <Header/>
      { namesElements }
      { counter } */}
     
    </div>
  );
}

export default App;
