import React from 'react';
import logo from './logo.svg';
import './App.css';
import galeria from '../src/componentes/galeria';



// en funcion no se pone los textos del html sino en clase//
// poner con mayuscula las clases y funciones//

class DatosPersonales extends React.Component{
  render(){
  return (
  <div>
       <h2>Nombre: Jennifer</h2>
        
  </div>
  );

}
}

function App() {        
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>datos</h1>
        <DatosPersonales/>
        </header>
    </div>
  );
}





 


export default App;
