import React from 'react';
import './Header.css'

class Header extends React.Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <header>
              <nav className="title">
                <a href="index.html">
                  <h1>Portfólio</h1>
                </a>
                <div>
                    <ul  id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                        <li><a href="index.html">Sobre</a></li>
                        <li><a href="index.html">Habilidades</a></li>
                        <li><a href="index.html">Projetos</a></li>
                        <li><a href="index.html">Experiências</a></li>
                        <li><a href="index.html">Contato</a></li>
                    </ul>
                </div>
                <div className="mobile" onClick={this.handleClick}>
                    <i id="bar" className= {this.state.clicked ? "fa-solid fa-x" : "fa-solid fa-bars" }></i>
               
                </div>
                
              </nav>
              
              <hr></hr>
            </header>
        )
    }
}

export default Header;