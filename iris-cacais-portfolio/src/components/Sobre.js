import React from "react";
import './Sobre.css'


class Sobre extends React.Component {
  
    render() {
        return (
            <section>
              <div className="divImage" >
                <img id="sobreMim" src='./iris.png' alt="Foto de Iris" className="foto" /> 
                <p>Morbi cursus tortor neque, porttitor facilisis lorem gravida et. Mauris in est a dui convallis sagittis sit amet ut quam. Duis vehicula dolor et ligula finibus, ac eleifend augue imperdiet. Vestibulum ac rhoncus mauris. Duis ac egestas leo. Etiam non nibh in ante iaculis dapibus eget eu orci. Vivamus luctus pulvinar libero, in vestibulum eros rutrum in. Vestibulum tincidunt sed ipsum sit amet fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
              </div>
            </section>
            
        )
    }
}

export default Sobre;