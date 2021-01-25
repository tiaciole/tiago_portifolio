import React from 'react';
import './App.css'
import shadow from './imagens/shadow.png'
import ferramenta from './imagens/icone-ferramenta.png' 
import red from './imagens/red.png'
import netflix2 from './imagens/netflix2.png'





function Startup(){
    return(

        <div className = "grade-startup">

            <div className = "startup1">
                <img className = "shadow"  src={shadow} alt=""/>
                <div className = "div-info-startup">
                    <p className = "p-shadow">Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <img classname = "ferramenta" src={ferramenta} alt=""/> <a href="#" className = "link"><span className = "em-construção"> Em Construção</span></a>
                </div>
            </div>

            <div className = "startup2">
            <img className = "red"  src={red} alt=""/>
            <div className = "div-info-startup">
                    <p className = "p-shadow">Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <img classname = "ferramenta" src={ferramenta} alt=""/> <a href="#" className = "link"><span className = "em-construção"> Em Construção</span></a>
                </div>
            </div>

            <div className = "startup3">
                <img className = "netflix2" src={netflix2} alt=""/>  
                <div className = "div-info-startup">
                    <p className = "p-shadow">Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                     <a href="#" className = "link"><span className = "em-construção"> Em Construção</span></a>
                </div>          
            </div>

            <div className = "startup4">
            <img className = "shadow"  src={shadow} alt=""/>
            <div className = "div-info-startup">
                    <p className = "p-shadow">Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <a href="#" className = "link"><span className = "em-construção"> www.osite.com.br</span></a>
                </div>
            </div>

            <div className = "startup5">
            <img className = "red"  src={red} alt=""/>
            <div className = "div-info-startup">
                    <p className = "p-shadow">Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                    <a href="#" className = "link"><span className = "em-construção"> Em Construção</span></a>
                </div>
            </div>

            <div className = "startup6">
            <img className = "netflix2" src={netflix2} alt=""/>
            <div className = "div-info-startup">
                    <p className = "p-shadow">Sistemas de chassis plug and play de próximo nível para montagens personalizadas de sabres de luz "faça você mesmo".</p>
                     <a href="#" className = "link"><span className = "em-construção"> Em Construção</span></a>
                </div>
            </div>



        </div>
    )

}

export default Startup;