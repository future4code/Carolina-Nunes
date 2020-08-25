import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DivFormulario = styled.div`
  border: 1px solid black;
  margin: 2%;
  justify-content: center;
  padding: 4%;
  display: flex;
  flex-direction: column;
  width: 40%;

`
const Header = styled.header`
  margin: 2%;
`

const Botao = styled.button`
  width: 20%;
  font-weight: bold;
  background-color: darkgreen;
  color: white;
`

class CadastroUsuarios extends React.Component {
    state = {
        usuarios: [],
        name: "",
        email: ""
    };
    
    
      criarUsuario = () => {
        const body = {
          name: this.state.name,
          email: this.state.email
        };
    
        const request = axios.post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
          {
            headers: {
              Authorization: "Carolina-DellaNina-Jackson"
            }
          }
        );
    
        request
        .then((resposta) => {
            alert(`O usuário ${this.state.name} foi criado com sucesso`)
            this.setState({ name: "" });
            this.setState({ email: "" })
        })
        .catch((erro) => {
            alert("Erro ao criar usuário")
            console.log("Erro ao cadastrar usuário")
        });
    }
    
    render() {
        const onChangeNameInput = (evento) => {
          this.setState({ name: evento.target.value });
        };
        const onChangeEmailInput = (evento) => {
          this.setState({ email: evento.target.value })
        };

        return (
            <div>
                <Header>
                    <button onClick={this.props.onClickUsuarios}>Ir para a página de lista</button>
                </Header>
      
                <DivFormulario>
                    <h2>Crie um usuário</h2>
                    <label for="name">Nome: </label>
                    <input value={this.state.name} onChange={onChangeNameInput} />
                    <br></br>
                    <label for="email">E-mail: </label>
                    <input value={this.state.email} onChange={onChangeEmailInput} />
                    <br></br>
                    <Botao onClick={this.criarUsuario}>SALVAR</Botao>
      
                </DivFormulario>
              
            </div>
        );
    }
}
export default CadastroUsuarios;