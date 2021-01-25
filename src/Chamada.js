import React from 'react'
import './App.css'

function Chamada(props){
    return(

        <div className = 'chamada'>
                <h1>{props.interessado}</h1>

                <p>{props.interessado2}</p>
            

            <button className = "botao2">Iniciar uma conversa</button>

        </div>

    )
}

export default Chamada;
