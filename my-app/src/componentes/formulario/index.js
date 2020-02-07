import React from 'react';



class Form extends React.Component{
    render(){
        
        return(
            <div>
                <h1>Formulario</h1>
                <form>
                <input
                 type="texto" 
                 id="username"
                  name="username" 
                  placeholder="nombre" 
                  value={username}
                  ></input>                    
                <input id="username" name="username" placeholder="apellido" value></input>
                </form>   
            </div>
        )
    }
}







export default Form;