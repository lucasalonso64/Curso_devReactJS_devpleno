import React, {useState } from 'react';
import Header from './Header'


const App = () => {
  const [counter, setCounter ] = useState(0)
  const names = ['Lucas', 'Alonso']
  const namesElements = names.map(name => <p>{name}</p>)
  return (
    <div>
      <Header/>
      { namesElements }
      { counter }
     
    </div>
  );
}

export default App;
