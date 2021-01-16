import React from 'react';
import './App.css'


function Menu(props){
    return(
        
        <ul className ="menu">    
            <li>{props.sobre}</li>
            <li className="d-ola">{props.ola}</li>

        </ul>

    )
}

export default Menu;