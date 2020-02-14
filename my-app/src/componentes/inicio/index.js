import React from 'react';
import styles from './componentes/styles.module.css';



class Principal extends React.Component{
    render(){
        return(
            <div>
                <h1>Jennifer Vallejos</h1>
                <p>Lorem ipsum dolor sit amet, dolore magna aliqua. </p>
            </div>
        )
    }
}

function Inicio (){
    return(
        <Principal/>
    );
}







export default Inicio;