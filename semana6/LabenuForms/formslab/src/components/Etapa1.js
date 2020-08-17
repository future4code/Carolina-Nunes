import React from 'react';
import styled from 'styled-components'

const Alinhamento = styled.div`
    text-align: center;
    margin: 2%;
`

class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <Alinhamento>
                    <h1>DADOS GERAIS</h1>
                    <div>
                        <p>1. Qual é o seu nome?</p>
                        <input placeholder="nome" />
                    </div>
                    <div>
                        <p>2. Qual é a sua idade?</p>
                        <input placeholder="idade"/>
                    </div>
                    <div>
                        <p>3. Qual é o seu e-mail?</p>
                        <input placeholder="e-mail"/>
                    </div>
                    <div>
                        <p>4. Qual é a sua escolaridade?</p>
                        <select>
                            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                            <option value="Ensino médio completo">Ensino médio completo</option>
                            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                            <option value="Ensino superior completo">Ensino superior completo</option>
                        </select>
                    </div>
                </Alinhamento>
            </div>
          );
    }
}


export default Etapa1;
