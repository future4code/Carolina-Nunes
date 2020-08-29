import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { baseUrl } from '../constants/Constants';
import { axiosConfig } from "../constants/Constants";

class DetalhePlaylist extends React.Component {
    state = {
        playlist: [],
    }

    detalhePlaylist = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, axiosConfig)
        .then((resposta) => {
            this.setState({infoPlaylist: resposta.data.result.tracks})
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    componentDidMount = (id) => {
        this.detalhePlaylist()
    }

    render(){
        console.log(this.state.infoPlaylist)

        return(
            <div>
               {this.state.playlist.map((music) => {
                   return(
                       <div>
                           <p key={music.id}>{music.name}</p>
                           <audio autoPlay="autoplay" controls="controls">
                               <source src={music.url} type="audio/mp3" />
                           </audio>
                       </div>
                   )
               })}
            </div>
        )
    }
}
export default DetalhePlaylist;