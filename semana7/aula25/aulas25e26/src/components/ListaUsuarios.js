import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl } from '../constants/Constants';
import { axiosConfig } from '../constants/Constants';

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
    border-radius: none;
  }
  &:active{
    border: none;
  }
`

const Titulo = styled.h2`
    margin-left: 2%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25px;
    color: navy;
`

const DivLista = styled.div`
    margin-left: 2%;
    padding: 1%;
    border: 1px dotted blue;
    width: 20%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 25px;
    color: navy;
`

const BotaoDel = styled.button`
    margin-left: 5%;
    background-color: red;
    color: white;
    font-weight: bold;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    border-radius: 30px;
    border: none;
    padding: 2%;
`

class ListaUsuarios extends React.Component {
    state = {
        usuarios: [],
    }
    
    componentDidMount() {
        this.pegarUsuario();
    }

    pegarUsuario = async () => {

        try {
            const resposta = await axios.get(baseUrl, axiosConfig);
            this.setState({ usuarios: resposta.data });
        } catch (erro) {
            console.log(erro)
        }
    };

    delUsuario = (id) => {
        const questao = window.confirm("Tem certeza de deseja deletar?")
        if(questao){
            const request = axios.delete(`${baseUrl}/${id}`, axiosConfig);
            request
            .then((resposta) => {
                this.pegarUsuario()
                alert("O usuário foi deletado")
            })
            .catch((erro) => {
                console.log(erro)
                alert("Não foi possível deletar o usuário")
            })
        } else {
            alert("Operação cancelada")
        }
    }

    render() {

        return (
            <div>
                <Header>
                    <BotaoTrocaPag onClick={this.props.onClickUsuarios}>Ir para a página de registro</BotaoTrocaPag>
                </Header>
                <Titulo>Usuários cadastrados:</Titulo>
                {this.state.usuarios.map((item) => {
                    return (
                        <DivLista>
                            <p key={item.id}>
                                {item.name}
                                <BotaoDel onClick={() => this.delUsuario(item.id)}>
                                    {" "}
                                    X
                                </BotaoDel>
                            </p>
                        </DivLista>
                    )
                })}

            </div>

        )
    }
}
export default ListaUsuarios;