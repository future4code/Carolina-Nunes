import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl } from '../constants/Constants';
import { axiosConfig } from "../constants/Constants";

class ListaPlaylists extends React.Component {
    state = {
        playlistLista: [],
    }
    componentDidMount() {
        this.pegarLista();
    }

    pegarLista = async () => {
        try{
            const resposta = await axios.get(baseUrl, axiosConfig);
            this.setState({ playlistLista: resposta.data.result.list })
        } catch (erro) {
            console.log(erro)
        }
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


    render (){

        return(
            <div>
                <h2>Playlists:</h2>
                {this.state.playlistLista.map((item) => {
                    return(
                        <div>
                            <p key={item.id}>
                                {item.name}
                                <button onClick={() => this.delPlaylist(item.id)}>Deletar Playlist</button>
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default ListaPlaylists;