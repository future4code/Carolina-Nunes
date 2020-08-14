import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';


const BordaForm = styled.input`
  border: 1px solid gray;
  width: 280px;
  height: 20px;
  margin-bottom: 10px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
`
const Botao = styled.button`
  border: 1px solid gray;
  border-radius: 40px;
  width: 150px;
  margin-bottom: 10px;
  margin-top: 5px;
  margin-left: 5px;
  padding: 5px;
  background-color: orange;
  font-weight: bold;

`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?a=1",
        fotoPost: "https://picsum.photos/200/150?a=1"
      },
      {
        nomeUsuario: "João",
        fotoUsuario: "https://picsum.photos/50/50?a=2",
        fotoPost: "https://picsum.photos/200/150?a=2"
      },
      {
        nomeUsuario: "Lucas",
        fotoUsuario: "https://picsum.photos/50/50?a=3",
        fotoPost: "https://picsum.photos/200/150?a=3"
      } 
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPosts = [...this.state.posts, novoPost];

    this.setState({
      posts: novoPosts,
      valorInputNomeUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const listaDePosts = this.state.posts.map((post) => {
      return (
        <section>
          <Post
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        </section>
      );
    });

    return (
      <div className={'app-container'}>
        <div>
          <BordaForm 
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <BordaForm 
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do usuário"}
          />
          <BordaForm 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do post"}
          />
          <Botao onClick={this.adicionaPost}>Adicionar Post</Botao>
        </div>
      
        <section>
          {listaDePosts}
        </section>
      </div>
    );
  }
}

export default App;
