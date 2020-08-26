import React from 'react';
import './App.css';
import axios from 'axios';
import ListaUsuarios from './components/ListaUsuarios'
import CadastroUsuarios from './components/CadastroUsuarios'
import styled from 'styled-components'



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
      <div>
        {paginaUsuarios()}
      </div>
    );
  }  
}
