import React from 'react';

class CardProjetos extends React.Component {
    render(){
        const { name, image, description, details, github, deploy } = this.props;
        return (
            <div className="container">
                <div className="card">
                    <div className="imgBx" data-text={ name }>
                       <img src={ image } alt='logo'/> 
                    </div>
                    <div className="content">
                        <div>
                            <h3>{ name }</h3>
                            <p>{ description }</p>
                            <p className="details"> Skills: { details }</p>
                            <a href={github}><i class="fa-brands fa-github fa-2x"></i></a>
                            <a href={deploy}><i class="fa-solid fa-display fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    } 
}

export default CardProjetos;