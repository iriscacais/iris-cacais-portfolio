import React from "react";
import './Sobre.css'


class Sobre extends React.Component {
    render() {
        return (
            <>
              <div className="divImage">
                <img src='./iris.png' alt="Foto de Iris" className="foto" /> 
                <div className="divSubtitle">
                <h2 className="saudacao">Olá, eu sou a Iris!</h2>
                <p className="paragrafo">Estudante de desenvolvimento web da escola de programação Trybe. Sejam bem-vindos(as) ao meu portfólio.</p>
                </div>
              </div>
                
            </>
        )
    }
}

export default Sobre;