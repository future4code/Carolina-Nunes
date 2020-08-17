import React from 'react';
import styled from 'styled-components'

const Alinhamento = styled.div`
    text-align: center;
    margin: 2%;
`

class Etapa3 extends React.Component {
    render(){
        return (
            <div>
                <Alinhamento>
                    <h1>INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                    <div>
                        <p>5. Por que você não completou um curso de graduação?</p>
                        <input type="text" />
                    </div>
                    <div>
                        <p>6. Você fez algum curso complementar?</p>
                        <select>
                            <option value="Curso técnico">Curso técnico</option>
                            <option value="Curso de inglês">Curso de inglês</option>
                            <option value="Não fiz nenhum curso complementar">Não fiz nenhum curso complementar</option>
                        </select>
                    </div>
                </Alinhamento>
            </div>
        );
    }
}

export default Etapa3;
