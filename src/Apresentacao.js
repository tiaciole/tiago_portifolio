import React from 'react';
import './App.css'

function Apresentação (props){
    return(
        <section className = "perfil">

            <div className ="perfil_texto">
                <span>{props.apres1}</span>

                    <p>{props.apres2}</p>
            </div>

        </section>
    )
}

export default Apresentação