import React from 'react';
import Cabecera from './cabecera';
import Footer from './footer';
import Seccion from './seccion';

class Principal extends React.Component{
    render(){
        
        return(
            <div class= "principal">
                <Cabecera></Cabecera>
                <Seccion></Seccion>
                <Footer></Footer>
            </div>
        )
    }
}
export default Principal;