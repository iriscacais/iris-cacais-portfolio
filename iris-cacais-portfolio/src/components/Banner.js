import React from 'react';
import './Banner.css'

class Banner extends React.Component {
    render() {
        return(
            
            <section className="divBanner">
                <div className="divApresentacao">
                <h2>Olá, eu sou a Iris!</h2>
                <p className="paragrafoBanner">Estudante de desenvolvimento web da escola de programação Trybe.</p>
                <p className="paragrafoBanner"> Sejam bem-vindos(as) ao meu portfólio.</p>
                </div>
                <span className="content">
                    <a href="mailto:mandeparairis@gmail.com" className="botoes">Entrar em contato</a>
                    <a href="" className="botoes">Download CV</a>
                </span> 
            </section>
             
            
        )
    }
}
export default Banner;