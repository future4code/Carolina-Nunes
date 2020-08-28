import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl } from './constants/Constants';
import { axiosConfig } from "./constants/Constants";
import ListaPlaylists from './components/ListaPlaylists'



export default class App extends React.Component {

  state = {
    playlist: "",
  }

  onChangePlaylistInput = (e) => {
    this.setState({ playlist: e.target.value })
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.playlist
    }

    axios
    .post(baseUrl, body, axiosConfig)
    .then((resposta) => {
      console.log(resposta)
      this.setState({ playlist: "" })
      alert("A playlist foi criada com sucesso")
    })
    .catch((erro) => {
      console.log(erro)
      alert("Erro ao criar a playlist")
    })
  }

  render (){

    return(
      <div className="App">
        <input 
          placeholder="Nome da playlist" 
          value={this.state.playlist}
          onChange={this.onChangePlaylistInput}
        />
        <button onClick={this.criarPlaylist} >Criar Playlist</button>
        <ListaPlaylists />
      
      </div>
    );
  }
}
