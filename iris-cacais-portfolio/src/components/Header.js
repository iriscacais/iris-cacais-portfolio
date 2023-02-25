import React from 'react';
import './Header.css'

class Header extends React.Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (

            <header className="header">
              <nav className="title">
                
                <div>
                    <h2>iris</h2>
                    <ul  id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="#sobreMim" className="navbar">Sobre</a></li>
                        <li><a href="#habilidades"className="navbar" >Hard Skills</a></li>
                        <li><a href="#projetos"className="navbar" >Projetos</a></li>
                        <li><a href="#experiencias" className="navbar">Experiências</a></li>
                        <li><a href="#contato"className="navbar" >Contato</a></li>
                    </ul>
                </div>
                <div className="mobile" onClick={this.handleClick}>
                    <i id="bar" className= {this.state.clicked ? "fa-solid fa-x" : "fa-solid fa-bars" }></i>
               
                </div>
              </nav>
            
            </header>
        )
    }
}

export default Header;