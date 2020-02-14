import React from 'react'
import styles from './styles.module.css';


import dog1 from './imagenes/dog1.jpeg';
import dog2 from './imagenes/dog2.jpeg';
import dog3 from './imagenes/dog3.jpeg';
import dog4 from './imagenes/dog4.jpeg';
import dog5 from './imagenes/dog5.jpeg';
import dog6 from './imagenes/dog6.jpeg';
import dog7 from './imagenes/dog7.jpeg';
import dog8 from './imagenes/dog8.jpeg';
import dog9 from './imagenes/dog9.jpeg';

//por ahora solo usamos clases para poder llamarlo en function App y asi poder verlo en crome//

//resolver en clase 

class Galeria extends React.Component{
    render(){
        return(
            <div className={styles.contenedor}>
                <div className={styles.cajaImagenes}>
                    <h2 className={styles.tituloGaleria}>Galeria</h2>
                    <img src={dog1} alt="dog" className={styles.imagen}></img>
                    <img src={dog4} alt="dogs" className={styles.imagen}></img>
                    <img src={dog7} alt="dog" className={styles.imagen}></img>
                    <img src={dog2} alt="dogs" className={styles.imagen}></img>
                    <img src={dog5} alt="dog" className={styles.imagen}></img>
                    <img src={dog8} alt="dogs" className={styles.imagen}></img>
                    <img src={dog3} alt="dog" className={styles.imagen}></img>
                    <img src={dog6} alt="dogs" className={styles.imagen}></img>
                    <img src={dog9} alt="dog" className={styles.imagen}></img>
                 </div>
            </div>
        )
    }
}





export default Galeria;