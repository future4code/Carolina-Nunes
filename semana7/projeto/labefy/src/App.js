import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ListaPlaylists from './components/ListaPlaylists';
import { baseUrl } from './constants/Constants';
import { axiosConfig } from './constants/Constants';

const DivApp = styled.div`
  text-align: center;
  color: white;
  background-color: black;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  margin: 0;
  padding-top: 3%;
  padding-bottom: 5%;
`
const Titulo = styled.h1`
  color: #55BA55;
  font-size: 50px;
`
const BotaoCriar = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    background-color: #55BA55;;
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

const CampoInput = styled.input`
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    background-color: white;;
    font-weight: bold;
    color: black;
    padding: 1%;
    width: 25%;
    border-radius: 20px;
    border: none;
    &:hover{
        background-color: lightgray;
        border-radius: none;
    }
    &:active{
        border: none;
    }
`

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

  render(){

    return(
        <div className="App">
          <DivApp>
              <Titulo>LABEFY</Titulo>
              <p>Suas músicas em um só lugar!</p>        

            <CampoInput 
                placeholder="Nome da playlist" 
                value={this.state.playlist}
                onChange={this.onChangePlaylistInput}
            />
            <BotaoCriar onClick={this.criarPlaylist} >Criar Playlist</BotaoCriar>
            <ListaPlaylists />
          </DivApp>
        </div>
    )
  }
}
