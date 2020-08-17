import React from 'react';
import styled from 'styled-components'

const Alinhamento = styled.div`
    text-align: center;
    margin: 2%;
`

class Etapa2 extends React.Component {
    render(){
        return (
            <div>
                <Alinhamento>
                    <h1>INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <div>
                        <p>5. Qual é o curso?</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>6. Qual é a unidade de ensino?</p>
                        <input type="text" />
                    </div>
                </Alinhamento>
            </div>
        );
    }
}

export default Etapa2;
