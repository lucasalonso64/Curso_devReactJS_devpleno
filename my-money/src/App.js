import React from 'react';
import axios from 'axios'

/*
axios
  .get('https://mymoney-alonsosistemas.firebaseio.com/valor.json')
  .then(res => {
    console.log(res)
  }) */

  axios
    .post('https://mymoney-alonsosistemas.firebaseio.com/valor.json', {
      outro: 'LUcas ALonso'
    })
    .then(res => {
      console.log(res)
    })


function App() {
  return (
    <div >
      <h1>My Money</h1>
      
    </div>
  );
}

export default App;
