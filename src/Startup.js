import React from 'react';
import './App.css'
import shadow from './imagens/shadow.png'
import red from './imagens/red.png'





function Startup(){
    return(

        <div className = "grade-startup">

            <div className = "startup1">
                <img className = "shadow"  src={shadow} alt=""/>
            </div>

            <div className = "startup2">
            <img className = "red"  src={red} alt=""/>
            </div>

            <div className = "startup3">
            
            </div>

            <div className = "startup4">
                4
            </div>

            <div className = "startup5">
                5
            </div>

            <div className = "startup6">
                6
            </div>



        </div>
    )

}

export default Startup;