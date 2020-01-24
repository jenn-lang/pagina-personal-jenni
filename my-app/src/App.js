import React from 'react';
import logo from './logo.svg';
import './App.css';


class formulario extends React.Component{
  render(){
  return <input  >{this.props.label}</input>;
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Jennifer  Vallejos
        </h1>
        
        <input />
      </header>
    </div>
  );
}




 


export default App;
