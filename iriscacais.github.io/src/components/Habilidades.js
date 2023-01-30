import React from "react";
import './Habilidades.css'
import CardSkills from "./CardSkills";
import dataHardSkills from "../dataHabilidades";

class Habilidades extends React.Component {
  
    render() {
        return (
            <main>
              <h2 id="habilidades">Hard Skills</h2>
              <div className="divSkills">
                {dataHardSkills.map((skill, index) => (
                    <CardSkills 
                    key= {index}
                    name={skill.name}
                    image={skill.image}
                    />
                ))}
              </div>
            </main>
            
        )
    }
}

export default Habilidades;