import React from 'react';
import Contenido from './contenido';
import Menu from './menu';
import Titulo from './titulo';

class Seccion extends React.Component{
    render(){
        
        return(
            <div class= "seccion">
                <Menu></Menu>
                <Titulo></Titulo>
                <Contenido></Contenido>
            </div>
        )
    }
}
export default Seccion;