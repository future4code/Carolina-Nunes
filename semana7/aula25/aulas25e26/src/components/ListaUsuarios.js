import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Header = styled.header`
    margin: 2%;
`
const Titulo = styled.h2`
    margin-left: 2%;
`

const DivLista = styled.div`
    margin-left: 2%;
    padding: 1%;
`

const BotaoDel = styled.button`
    margin: 1px;
    background-color: red;
    color: white;
    font-weight: bold;
`

class ListaUsuarios extends React.Component {
    state = {
        usuarios: [],
    }
    
    pegarUsuario = () => {
        const request = axios.get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
          {
            headers: {
              Authorization: "Carolina-DellaNina-Jackson"
            }
          }
        );
    
        request
        .then((resposta) => {
            this.setState({ usuarios: resposta.data })
            console.log(resposta.data)
        })
        .catch((erro) => {
            console.log("Ocorreu um erro");
        })
    };
    componentDidMount() {
        this.pegarUsuario();
    }

    delUsuario = (id) => {
        const request = axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
            {
                headers: {
                    Authorization: "Carolina-DellaNina-Jackson"
                }
            }
        );
        request
        .then((resposta) => {
            alert("O usuário foi deletado")
        })
        .catch((erro) => {
            alert("Não foi possível deletar o usuário")
        })

    }

    render() {

        return (
            <div>
                <Header>
                    <button onClick={this.props.onClickUsuarios}>Ir para a página de registro</button>
                </Header>
                <Titulo>Usuários cadastrados:</Titulo>
                {this.state.usuarios.map((item) => {
                    return (
                        <DivLista>
                            <li key={item.id}>{item.name}</li>
                            <BotaoDel onClick={() => this.delUsuario(item.id)}>Deletar</BotaoDel>
                        </DivLista>

                    )
                })}

            </div>

        )
    }
}
export default ListaUsuarios;