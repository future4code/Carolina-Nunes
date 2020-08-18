import React from 'react';
import styled from 'styled-components'

const Alinhamento = styled.div`
    text-align: center;
    margin: 2%;
`
class Final extends React.Component {
    render(){
        return (
            <div>
                <Alinhamento>
                    <h1>O FORMULÁRIO ACABOU</h1>
                    <h3>Muito obrigado por participar! Entraremos em contato!</h3>
                </Alinhamento>
            </div>
        );
    }
}

export default Final;
