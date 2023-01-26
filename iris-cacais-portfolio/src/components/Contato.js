import React from "react";
import './Contato.css'

class Contato extends React.Component {
  
    render() {
        return (
            <main>
                <h2 id="contato">Contato</h2>
                <br></br>
                <div className="divContato">
                <a href="mailto:mandeparairis@gmail.com"><i className="fa-regular fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/iriscacais/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/iriscacais"><i class="fa-brands fa-github"></i></a>
                <p><i class="fa-brands fa-whatsapp"></i>(11)95142-8270</p>
                </div>
           </main> 
        )
    }
}

export default Contato;