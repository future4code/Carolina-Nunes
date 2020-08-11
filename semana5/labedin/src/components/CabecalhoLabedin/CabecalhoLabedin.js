import React from 'react';
import './CabecalhoLabedin.css'

function CabecalhoLabedin(props) {
    return (
        <div className="cabecalho-container">
            <img src={ props.imagem } />
           
        </div>
    )
}

export default CabecalhoLabedin;