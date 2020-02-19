import React from 'react';
import styles from './styles.module.css';
import sopa from './componentes/imagenes/sopa.png';
class Sopa2 extends React.Component{
    render(){
        return(
            <div>
                <img src={sopa} className={styles.sopa}></img>
            </div>
        )
    }

}


export default Sopa2;