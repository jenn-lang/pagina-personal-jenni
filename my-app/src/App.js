import React from 'react';
import logo from './logo.svg';
import './App.css';
//import formulario from './';//
import Form from '../src/componentes/formulario'; 

function App() {
  return (
    <div className="App">
      <header >
        <Form src={Form}/>
           </header>
    </div>
  );
}

export default App;
