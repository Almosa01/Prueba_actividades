import React from 'react';

class Menu extends React.Component{
    render(){
        
        return(
            <div class= "menu">
                <img src="https://www.aquora.es/wp-content/uploads/2016/05/Logo-Florida-Universitaria-2.png" width="100%" height="35%"></img>
                <ul>

                    <li><a href="https://www.floridaoberta.com/login/index.php">Ejercicios</a></li>

                    <li><a href="https://www.floridauniversitaria.es/es-ES/Paginas/FloridaUniversitaria.aspx?Perfil=Florida%20Universitaria">Informacion</a></li>

                    <li><a href="https://www.floridauniversitaria.es/es-ES/Paginas/solicitud-informacion-general.aspx?Perfil=Florida%20Universitaria">Contacto</a> </li>
                    
                </ul>
            </div>
        )
    }
}
export default Menu;