import React from "react";
import './Experiencias.css'

class Experiencias extends React.Component {
  
    render() {
        return (
            <main id="experiencias" className="experiencias">
                <h2>Experiências</h2>
                <div className="divExperiencias">
                    <br></br>
                    <ul>
                    <li>Início do curso de desenvolvimento web na escola de programação Trybe em setembro de 2022.</li>
                    <li>Concluído: Módulo de fundamentos <a href="https://www.credential.net/cb5b43d4-d235-45fc-957d-b90026f4b0d7#gs.o7qc1o" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-graduation-cap"></i></a></li>
                    <li>Estudando: Módulo de front-end / Redux</li>
                    <li>Próximos passos: back-end e ciência da computação</li>
                    </ul>
                </div>
           </main> 
        )
    }
}

export default Experiencias;