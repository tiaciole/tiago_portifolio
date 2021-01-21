import React from 'react'
import './App.css'

function Empresas (props){
    return(
        <div className = "empresas">
            <h1>{props.empresa}</h1>
        </div>

    )
}

export default Empresas;