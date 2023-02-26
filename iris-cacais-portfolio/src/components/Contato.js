import React from "react";
import './Contato.css'

class Contato extends React.Component {
  
    render() {
        return (
            <main id="contato">
                <h2>Contato</h2>
                <br></br>
                <div className="divContato">
                    <ul>
                        <li><a href="mailto:mandeparairis@gmail.com"><i class="fa-regular fa-envelope"></i></a></li> 
                        <li><a href="https://www.linkedin.com/in/iriscacais/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/iriscacais" target="_blank" rel="noopener noreferrer" ><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>
           </main> 
        )
    }
}

export default Contato;