import React from 'react'
import './galeria.css';


import dog1 from '/imagenes/dog1.jpeg';
import dog2 from './imagenes/dog2.jpeg';
import dog3 from './imagenes/dog3.jpeg';
import dog4 from './imagenes/dog4.jpeg';
import dog5 from './imagenes/dog5.jpeg';
import dog6 from './imagenes/dog6.jpeg';
import dog7 from './imagenes/dog7.jpeg';
import dog8 from './imagenes/dog8.jpeg';
import dog9 from './imagenes/dog9.jpeg';

//por ahora solo usamos clases para poder llamarlo en function App y asi poder verlo en crome//

class Galeria extends React.Component{
    render(){
        return(
            <div className="contenedor">
                <div className="imagenes">
                    <image src={dog1} ></image>

                </div>
            </div>
        )
    }
}





export default Galeria;