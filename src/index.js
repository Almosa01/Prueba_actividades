import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Principal from './components/principal';

class Componente extends React.Component{
    render(){
        
        return(
            <div class= "index">
                <Principal></Principal>
            </div>
        )
    }
}
ReactDOM.render(       
    <Componente />,document.getElementById('root')
    );

