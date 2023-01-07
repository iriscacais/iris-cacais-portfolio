import React from 'react';

class Header extends React.Component {
    state = { clicked: false };
    render() {
        return (
            <header>
              <nav className="title">
                <a href="index.html">
                  <h1>Portfólio</h1>
                </a>
                <div>
                    <ul  className="navbar">
                        <li><a href="index.html">Sobre mim</a></li>
                        <li><a href="index.html">Habilidades</a></li>
                        <li><a href="index.html">Projetos</a></li>
                        <li><a href="index.html">Experiências</a></li>
                        <li><a href="index.html">Contato</a></li>
                    </ul>
                </div>
                {/* <div className="mobile">
                    <i id="bar" className= {this.state.clicked ? "bi bi-x" : "bi bi-list" }></i>
               
                </div> */}
                
              </nav>
              
              <hr></hr>
            </header>
        )
    }
}

export default Header;