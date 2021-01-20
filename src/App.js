import React from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Info from './Info'
import Apresentação from './Apresentacao'
import Serviços from './Serviços'
import Grade from './Grade'


function App(){
    return(
        <div>
            <Header/>

            <Info nome = "Desenvolvedor Fullstack - Tiago Aciole de Oliveira" apresentacao = "Eu projeto e codifico coisas lindamente simples e adoro oque faço"/>

            <Apresentação/>

            <Serviços/>
            
            <Grade/>
            
        </div>

    )

}

export default App;