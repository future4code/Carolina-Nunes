import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import styled from 'styled-components'

const Borda = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  margin-top: 5px;
`
const Cabecalho = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`
const Rodape = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
const FotoUsuario = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const FotoPost = styled.img`
  width: 100%;
`


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    if (!this.state.curtido){
      this.setState({
        curtido: this.state.curtido === false,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    } else {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
    console.log('Curtiu!')
  }
 
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  
  aoEnviarComentario = (event) => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <Borda>
      <Cabecalho>
        <FotoUsuario src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </Cabecalho>

      <FotoPost src={this.props.fotoPost} alt={'Imagem do post'}/>

      <Rodape>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </Rodape>
      {componenteComentario}
    </Borda>
  }
}

export default Post