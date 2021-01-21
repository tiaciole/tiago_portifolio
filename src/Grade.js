import React from 'react'
import './App.css'



function Grade(){
    return(
        <div className = "container-grade">
            <h1>Meus trabalhos recentes</h1>
            <p>Aqui estão alguns projetos de design em que trabalhei recentemente. Quer ver mais? <span><a href="#"> Me mande um email</a></span> .</p>

            <section className = "grade1">

                <div className = "gride1">
                    <div className = "black-box"></div>
                </div>

                <div className = "gride2" >
                    Alemanha
                </div>

                <div className = "gride3">
                    Berlim
                </div>

                <div className = "gride4">
                    Japão
                </div>

                <div className = "gride5">
                    New-York
                </div>

                <div className = "gride6">
                    França
                </div>

            </section>

          
            <button className = "botao"> (Logo) Veja mais na Dribbble</button>

            
                <hr/>
        </div>




    )
}

export default Grade;