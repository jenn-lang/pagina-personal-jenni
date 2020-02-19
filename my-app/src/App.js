import React from 'react';
import './App.css';
//import Galeria from '../src/componentes/galeria';
import Inicio from '../src/componentes/inicio';


//import logo from './logo.svg';y el logo estaba en fuction debajo de <header></header> escrito asi :<img src={logo} className="App-logo" alt="logo" />//
// en funcion no se pone los textos del html sino en clase//
// poner con mayuscula las clases y funciones//

//class DatosPersonales extends React.Component{
 // render(){
  //return (
  //<div>
    //   <h2>Nombre: Jennifer</h2>
        
  //</div>
 // ej de como llamar en la funcion <Galeria src={Galeria}/><div className="App">
     // <header className="App-header">
        
        
     

function App() {        
  return (
    <body>
    <Inicio src={Inicio}/>
    </body>
  );
}


export default App;
