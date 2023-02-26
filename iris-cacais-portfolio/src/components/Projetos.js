import React from "react";
import dataProjetos from "../dataProjetos";
import CardProjetos from "./CardProjetos";
import './Projetos.css';

class Projetos extends React.Component {
    render() {
        return (
            <section  id="projetos">
            <h2>Projetos</h2>
            <div className="divProjetos">
                {dataProjetos.map((projeto, index) => (
                    <CardProjetos
                    key= {index}
                    name={projeto.name}
                    image={projeto.image}
                    description={projeto.description}
                    details={projeto.details}
                    github= {projeto.github}
                    deploy={projeto.deploy}
                    />
            
                ))}
              </div>
              </section>
        )
    }

}

export default Projetos;