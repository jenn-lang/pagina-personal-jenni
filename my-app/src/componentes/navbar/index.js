//en esta carpeta hay que poner otras carpetas con componentesej img , el menu-items del nav
import React from 'react';
import styles from './styles.module.css'
                    
 
class Navbar extends React.Component{
    Render(){
        return(
            <nav className={styles.navbar}>
                <ul className={styles.contenedor}>
                    <img className={styles.logo} src="https:images.app.goo.glUVu7g7CKVkpkWmY49"><Link to='/'>Home</Link></img>
                    <li><Link to='/sobre mi'>Sobre mi</Link></li>
                    <li><Link to='/cursos'>Cursos</Link></li>
                    <li><Link to='/proyectos'>Proyectos</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>

                </ul>
            </nav>
        )
    }
}


export default Navbar;