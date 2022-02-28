import React from 'react';

class Contenido extends React.Component{
    render(){
        
        return(
            <div class= "contenido">
                <h1 class="texto3">En este video se explica como vamos a orientar este curso durante el proximo 2021</h1>
                <center><iframe width="560" height="315" src="https://www.youtube.com/embed/SeI97PqHO_0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
            </div>
        )
    }
}
export default Contenido;