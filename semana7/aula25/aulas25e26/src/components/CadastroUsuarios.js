import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl } from '../constants/Constants';
import { axiosConfig } from '../constants/Constants';

const DivFormulario = styled.div`
  border: 1px dotted blue;
  margin: 2%;
  justify-content: center;
  padding: 4%;
  display: flex;
  flex-direction: column;
  width: 40%;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 25px;
  color: navy;
`
const Header = styled.header`
  margin: 2%;
`
const BotaoTrocaPag = styled.button`
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 20px;
  background-color: blue;
  font-weight: bold;
  color: white;
  padding: 1%;
  width: 30%;
  border-radius: 20px;
  border: none;
  &:hover{
    background-color: orange;
    border: none;
  }
  &:active{
    border: none;
  }
`

const InputForm = styled.input`
  color: navy;
  border: blue 1px dotted;
`

const Botao = styled.button`
  width: 20%;
  font-weight: bold;
  background-color: darkgreen;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  width: 30%;
  padding: 1%;
  &:hover{
    background-color: lightgreen;
    border: none;
  }
  &:active{
    border: none;
  }
`

class CadastroUsuarios extends React.Component {
  state = {
    usuarios: [],
    name: "",
    email: ""
  };

  onChangeNameInput = (evento) => {
    this.setState({ name: evento.target.value });
  };
  onChangeEmailInput = (evento) => {
    this.setState({ email: evento.target.value })
  };
    
  criarUsuario = () => {
    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(baseUrl, body, axiosConfig)
      .then((response) => {
        console.log(response)
        this.setState({ name: "", email: "" })
        alert("O usuário foi criado com sucesso")
      })
      .catch((error) => {
        console.log(error.message)
        alert("Erro ao cadastrar usuário")
      })
  }
    
  render() {

    return (
      <div>
        <Header>
          <BotaoTrocaPag onClick={this.props.onClickUsuarios}>Ir para a página de lista</BotaoTrocaPag>
        </Header>
      
        <DivFormulario>
          <h2>Crie um usuário</h2>
          <label for="name">Nome:</label>
          <InputForm 
            value={this.state.name} 
            onChange={this.onChangeNameInput} 
          />
          <br></br>
          <label for="email">E-mail:</label>
          <InputForm 
            value={this.state.email} 
            onChange={this.onChangeEmailInput} 
          />
          <br></br>
          <Botao onClick={this.criarUsuario}>SALVAR</Botao>
        </DivFormulario>
      </div>
    );
  }
}
export default CadastroUsuarios;