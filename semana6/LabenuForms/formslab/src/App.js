import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from 'styled-components'

const Botao = styled.div`
    text-align: center;
    margin: 2%;
    border: 1px solid red;
    padding-bottom: 2%;
`

class App extends React.Component {

  state = {
    etapa: 1
  };

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    });
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        break
    }
  }

render(){
  return (
    <div>
        <Botao>
          {this.renderizaEtapa()}
          <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
        </Botao>
    </div>
    );
  }
}

export default App;
