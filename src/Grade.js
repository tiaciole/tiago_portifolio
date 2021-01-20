import React from 'react'
import './App.css'

import Vegano from './Vegano.jpg'

function Grade(){
    return(
        <div className = "container-grade">
            <h1>Meus trabalhos recentes</h1>
            <p>Aqui estão alguns projetos de design em que trabalhei recentemente. Quer ver mais? <span><a href="#"> Me mande um email</a></span> .</p>

            <section className = "grade1">

                <div>
                
                </div>

                <div className ="div1" style={{backgroundImage: `url(${Vegano})`}}>
                    grade 2
                </div>

                <div>
                    grade 3
                </div>
            </section>

            <section className = "grade2">

                <div>
                    grade 4
                </div>

                <div>
                    grade 5
                </div>

                <div>
                    grade 6
                </div>

            </section>

            <button className = "botao"> (Logo) Veja mais na Dribbble</button>

            
                <hr/>
        </div>




    )
}

export default Grade;