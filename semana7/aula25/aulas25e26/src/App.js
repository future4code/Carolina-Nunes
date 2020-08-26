import React from 'react';
import './App.css';
import ListaUsuarios from './components/ListaUsuarios'
import CadastroUsuarios from './components/CadastroUsuarios'
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: left;
  width: 100%;
  height: 100vh;
  margin: 2%;
`

export default class App extends React.Component {
  state = {
    listaUsuarios: false,
    cadastroUsuarios: true,
  };

  onClickUsuarios = () => {
    this.setState({
      listaUsuarios: true,
      cadastroUsuarios: !this.state.cadastroUsuarios
    })
  }

  render() {
    const paginaUsuarios = () => {
      if(this.state.cadastroUsuarios){
        return <CadastroUsuarios onClickUsuarios={this.onClickUsuarios} />
      } else if (this.state.listaUsuarios){
        return <ListaUsuarios onClickUsuarios={this.onClickUsuarios}/>
      }
    }
    
    return (
      <AppContainer>
        {paginaUsuarios()}
      </AppContainer>
    );
  }  
}
