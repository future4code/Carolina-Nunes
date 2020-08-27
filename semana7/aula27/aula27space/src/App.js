import React from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';

const DivFoguetes = styled.div`
  text-align: center;
  font-family: 'Space Mono', monospace;
  background-color: #031226;
  color: #F2E4E4;
  padding: 10%;
  padding-top: 4%;
`

const Titulo = styled.h2`
  color: #C54042;
`

export default class App extends React.Component {

  state = {
    foguetes: []
  }

  pegarFoguetes = () => {
    axios
      .get("https://api.spacexdata.com/v3/rockets")
      .then((resposta) => {
        console.log(resposta)
        this.setState ({ foguetes: resposta.data })
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  componentDidMount (){
    this.pegarFoguetes()
  }

  
  render (){

    return(
      <DivFoguetes>
        {this.state.foguetes.map((item) => {
          return (
            <div>
              <Titulo key={item.id}>{item.rocket_name}</Titulo>
              <p key={item.id}> 
                <strong>País:</strong> {item.country}
              </p>
              <p key={item.id}> 
                <strong>Empresa:</strong> {item.company}
              </p>
              <p key={item.id}> 
                <strong>Descrição:</strong> {item.description}
              </p>
              <a href={item.wikipedia}>Link do foguete</a>
              <hr></hr>
            </div>
          );
        })}
      </DivFoguetes>
    )
  }
}
