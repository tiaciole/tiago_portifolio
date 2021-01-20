import React from 'react';
import './App.css'
import  img from './tiago.png' 
import img2 from './workstation.png'

function Info(props){
    return(

        <section>
            
                <div className = "info">

                    <h1 className = " primeiro_nome">{props.nome}</h1>

                    <p className = "segundo_nome">{props.apresentacao}</p>

                    <img className ="avatar" src={img} alt=""/>

                </div>

                <div className = "rodape_info">

                    <img className ="img_rod" src={img2}alt=""/>


                </div>
            
        </section>


    )
}

export default Info;
