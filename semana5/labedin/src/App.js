import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import FotoCarolina from './img/foto.jpeg';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardCursos from './components/CardCursos/CardCursos'
import LogoLabedin from './img/labedin.png'
import CabecalhoLabedin from './components/CabecalhoLabedin/CabecalhoLabedin'

function App() {
  return (
    <div className="App">
      <header>
        <CabecalhoLabedin
          imagem={LogoLabedin}
        />
      </header>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={FotoCarolina}
          nome="Carolina Nunes Della Nina" 
          descricao="Oi! Meu nome é Carolina, tenho 37 anos e moro em São Paulo. Estou em transição de carreira para a área de tecnologia, cursando Dev Web Full Stack na Labenu. Tenho mais de dez anos de experiência em marketing, gestão de produtos, produção de conteúdo e gestão de pessoas."
        />
        
        <ImagemButton 
          imagem="https://cdn.pixabay.com/photo/2013/07/12/14/06/arrows-147745_960_720.png" 
          texto="VER MAIS"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Editora Intrínseca" 
          cargo="Coordenadora de Marketing"
          descricao="Planejamento estratégico para lançamento de novos produtos;
          Relacionamento com autores, influenciadores e parceiros;
          Responsável pela realização de eventos de pequeno e grande portes, como Bienais do Livro, FLIP e outros;
          Gestão e análise de KPIs." 
        />
        
        <CardGrande 
          imagem="https://cpp-prod-catho-company-image-uploads.s3.sa-east-1.amazonaws.com/280301/logo/778a6d11-bc69-11ea-bc73-ad664f72b390.jpg" 
          nome="MJV Tecnologia & Inovação"
          cargo="Analista de Marketing"
          descricao="Gerenciamento de redes sociais;
          Organização de palestras e workshops." 
        />
      </div>

      <div>
        <h2>Formação</h2>
        <CardCursos
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eab0f1225c2d474a92656df_fav2_LabeNu_.png"
          nome="Labenu"
          descricao="Bootcamp Programação Web Full Stack"
        />

        <CardCursos
          imagem="https://estagioonline.com/wp-content/uploads/2020/04/cursos-online-gratuitos-ibmec-quarentena-coronavirus.png"
          nome="IBMEC"
          descricao="MBA em Comunicação Estratégica"
        />

        <CardCursos
          imagem="https://lh3.googleusercontent.com/proxy/-wZqwB_8srzwvDYcIqfdn2lfqGWbJbKbqgesjGtWkOPsh-ayW9lczoIwkGYhHoGy_Xdz7WWoIjp1_1rXAfNVbsUygOhXR9VTOeSJqP31yyzbetosTxoI4ojaAKLmjX0-hWjY9wmuucDi5wqzNLxMKvQJINM"
          nome="ESPM"
          descricao="Administração"
        />
      </div>

      <div>
        <h2>Contato</h2>
        <CardPequeno
          imagem="https://imageog.flaticon.com/icons/png/512/281/281769.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          nome="E-mail"
          descricao="carolinadellanina@gmail.com"
        />
        <CardPequeno
          imagem="https://png.pngtree.com/element_our/md/20180626/md_5b321c98efaa6.jpg"
          nome="Celular"
          descricao="+55 11 99999-9999"
        />
        <CardPequeno
        imagem="https://i.pinimg.com/474x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg"
        nome="Endereço"
        descricao="Avenida Sabiá - São Paulo"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg" 
          texto="LinkedIn" 
        />        

        <ImagemButton 
          imagem="https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-1.png" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
