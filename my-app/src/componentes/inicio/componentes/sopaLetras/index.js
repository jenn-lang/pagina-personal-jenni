import React from 'react';
import styles from './styles.module.css';
import sopa from '../imagenes/sopa.png';



class SopaLetras extends React.Component{
    render(){
        return(
            <div className={styles.contenedor}>
                <img src={sopa} className={styles.sopa} ></img>
                <div className={styles.subContenedor}>
                <botton className={styles.botones}>H</botton>
                <botton className={styles.botones}>B</botton>
                <botton className={styles.botones}>S</botton>
                <botton className={styles.botones}>J</botton>
                <botton className={styles.botones}>V</botton>
                
                </div>
                <p className={styles.cuadro}></p>
                <p className={styles.cuadro1}></p>
                <p className={styles.cuadro2}></p>
                
            </div>
        )
    }
}

export default SopaLetras;
