import React from 'react';
import './CardCursos.css'

function CardCursos(props) {
    return (
        <div className="cursoscard-container">
            <img src={ props.imagem } />
            <div>
                <h3>{ props.nome }</h3>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardCursos;