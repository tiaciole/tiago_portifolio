import React from 'react';
import './App.css';

function Serviços(){
    return(
        <div className ="colunas">

            <div className ="div1">
              <img src="" alt=""/>
              <h3>Designer</h3>
              <br/>              
              <p className = "serviço_descrição">Eu valorizo ​​uma estrutura de conteúdo simples, padrões de design limpos e interações atenciosas.</p>
              <h4 className = "subtitulo">Coisas que gosto de desenhar:</h4>
              <p>UX, IU, Web, Celular, Aplicativos, Logotipos</p>
              <h4 className = " subtitulo">Ferramentas de Designer:</h4>
              <ul>
                <li>Balsamiq Mockups</li>
                <li>Figma</li>
                <li>Invision</li>
                <li>Maravilha</li>
                <li>Caneta e Papel</li>
                <li>Esboço</li>
                <li>Webflow</li>
                <li>Zeplin</li>
              </ul>
            </div>

            <div className = "div2">
              <img src="" alt=""/>
              <h3>Desenvolvedor front-end</h3>
              <br/>
              <p className = "serviço_descrição">Gosto de codificar coisas do zero e gosto de dar vida às ideias no navegador.</p>
              <h4 className = "subtitulo">Línguas que falo:</h4>
              <p>HTML, CSS, Ract, Javascript</p>
              <h4 className = " subtitulo">Ferramentas de Desenvolvimento:</h4>
              <ul>
                <li>Átomo</li>
                <li>Bitbucket</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
                <li>Codekit</li>
                <li>Codepen</li>
                <li>Github</li>
                <li>Gitlab</li>
                <li>terminal</li>
              </ul>
            </div>
           
            <div className = "div3">
              <img src="" alt=""/>
              <h3>Mentor</h3>
              <br/>
              <p className = "serviço_descrição">Gosto de codificar coisas do zero e gosto de dar vida às ideias no navegador.</p>
              <h4 className = "subtitulo">Experiências que utilizo:</h4>
              <p>UX / UI, design de produto, freelancer</p>
              <h4 className = " subtitulo">Estatísticas do mentor:</h4>
              <ul>
                <li>5 anos de experiência</li>
                <li>26 minicursos</li>
                <li>42 bootcamps</li>
                <li>Mais de 125 alunos</li>
                <li>Mais de 1.400 sessões de mentor</li>
                <li>Mais de 60 críticas de grupo</li>
                <li>Mais de 12.000 comentários</li>
              </ul>
            </div>

        </div>
    )
}

export default Serviços;
