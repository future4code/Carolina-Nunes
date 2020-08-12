import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="peqcard-container">
            <img src={ props.imagem } />
            <div>
                <h3>{ props.nome }</h3>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;