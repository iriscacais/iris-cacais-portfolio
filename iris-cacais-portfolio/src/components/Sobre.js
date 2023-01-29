import React from "react";
import './Sobre.css'


class Sobre extends React.Component {
  
    render() {
        return (
            <section >
              <div className="divImage" >
                <img id="sobreMim"src='./iris.png' alt="Foto de Iris" className="foto" /> 
                <p>Meu nome é Iris e tenho 29 anos, moro em São Paulo e sou apaixonada por livros. Em setembro de 2022 iniciei uma transição de carreira na escola de desenvolvimento web Trybe. <br></br><br></br>Me considero uma intusiasta dos estudos e novos conhecimentos e por isso minha maior motivação em entrar na área de tecnologia é poder exercer minha criatividade e curiosidade em ambientes colaborativos que também tenham paixão por ensinar e aprender. <br></br><br></br>Conclui o módulo de fundamentos em novembro e atualmente estou estudando desenvolvimento front-end, no curso tenho oportunidade de praticar as habilidades adquiridas em diversos exercícios e projetos individuais e em grupo.
                </p>
              </div>
            </section>
            
        )
    }
}

export default Sobre;