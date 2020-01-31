import React from 'react';
import './App.css';
import Galeria from '../src/componentes/galeria';


//import logo from './logo.svg';y el logo estaba en fuction debajo de <header></header> escrito asi :<img src={logo} className="App-logo" alt="logo" />//
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
        <h1>datos</h1>
        <DatosPersonales/>
        <Galeria src={Galeria}/>
        </header>
    </div>
  );
}





 


export default App;
