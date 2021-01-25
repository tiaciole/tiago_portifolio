import React from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Info from './Info'
import Apresentação from './Apresentacao'
import Serviços from './Serviços'
import Grade from './Grade'
import Empresas from './Empresas'
import Grade_Empresa from './Grade_Empresa'
import Startup from './Startup'
import Chamada from './Chamada'


function App(){
    return(
        <div>
            <Header/>

            <Info nome = "Desenvolvedor Fullstack - Tiago Aciole de Oliveira" apresentacao = "Eu projeto e codifico coisas lindamente simples e adoro oque faço"/>

            <Apresentação apres1 = "Olá, sou Tiago. Prazer em conhecê-lo." apres2 = 
                    "Desde o início da minha jornada como designer freelance há quase 10 anos,  
                    fiz trabalho remoto para agências, dei consultoria para startups e colaborei
                    com pessoas talentosas para criar produtos digitais para uso comercial 
                    e consumidor. Estou silenciosamente confiante, naturalmente curioso
                    e trabalhando perpetuamente para melhorar minhas habilidades,
                    um problema de design por vez."/>

            <Serviços/>
            
            <Grade/>

            <Empresas empresa = "Tenho Orgulho de ter colaborado com algumas empresas incríveis:" />

            <Grade_Empresa/>

            <Apresentação apres1 = "Meus projetos iniciais" apres2 = 
            "Sou um viciado em produtos digitais. Ao longo dos anos, 
            usei centenas de aplicativos da web e móveis em diferentes 
            setores e verticais. Eventualmente, decidi que seria um desafio 
            divertido tentar projetar e construir o meu próprio."/>

            <Startup/>

            <Chamada interessado = "Interessado em Colaborar ou investir" interessado2 = "Estou sempre aberto para discutir o trabalho de design de produto ou oportunidades de parceria."/>

           
            
        </div>

    )

}

export default App;