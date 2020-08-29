import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl } from '../constants/Constants';
import { axiosConfig } from "../constants/Constants";
import DetalhePlaylist from './DetalhePlaylist'

const TituloPlaylist = styled.h2`
    color: #55BA55;
`

const BotaoDel = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    background-color: red;
    font-weight: bold;
    color: white;
    padding: 1%;
    width: 15%;
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
const BotaoDetalhe = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    background-color: blue;
    font-weight: bold;
    color: white;
    padding: 1%;
    width: 15%;
    border-radius: 20px;
    border: none;
    &:hover{
        background-color: lightblue;
        border-radius: none;
    }
    &:active{
        border: none;
    }
`

class ListaPlaylists extends React.Component {
    state = {
        listaPlaylists: [],
        info: false
    }

    pegarLista = () => {
        axios.get(baseUrl, axiosConfig)
        .then((resposta) => {
            this.setState({ listaPlaylists: resposta.data.result.list })
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    delPlaylist = (id) => {
        const questao = window.confirm("Tem certeza de que deseja deletar a playlist?")
        if (questao) {
            const request = axios.delete(`${baseUrl}/${id}`, axiosConfig)
            request
            .then((resposta) => {
                this.pegarLista()
                alert("A playlist foi deletada")
            })
            .catch((erro) => {
                console.log(erro)
                alert("Não foi possível deletar a playlist")
            })
        } else {
            alert("Operação cancelada")
        }
    }
    

    onClickDetalhes = () => {
        this.setState({ info: !this.state.info })
    }

    componentDidMount () {
        this.pegarLista()
    }

    render (){
        const pageDatalhes = (id) => {
            if (!this.state.info){
                return <DetalhePlaylist idDetalhePlaylist={id}/>
            }
        }

        return(
            <div>
                <TituloPlaylist>Playlists</TituloPlaylist>
                {this.state.listaPlaylists.map((item) => {
                    return(
                        <div>
                            <h3 key={item.id}>{item.name}</h3>
                                <BotaoDel onClick={() => this.delPlaylist(item.id)}>DELETAR</BotaoDel>
                                <BotaoDetalhe onClick={this.onClickDetalhes}>DETALHES</BotaoDetalhe>
                                {pageDatalhes(item.id)}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListaPlaylists;