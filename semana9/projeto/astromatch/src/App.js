import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Matches from './components/Matches';
import FooterPage from './components/FooterPage';
import { Header, AstroFont }from './components/Styled';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HowToRegIcon from '@material-ui/icons/HowToReg';


function App() {
  const [page, setPage] = useState(true)

  const changePage = () => {
    setPage(!page)
  }

  const renderPage = () => {
    if (page === true){
      return <Home />
    } else if (page === false){
      return <Matches />
    }
  }

  return (
    <div className="App">
      <Header>
        <Typography variant="h2"><strong>AstroMatch</strong></Typography>
        <Button variant="contained" >
          <HowToRegIcon onClick={() => changePage(false)} style={{ fontSize: 30 }}/>
        </Button>
      </Header>
      {renderPage()}
      <FooterPage />
      <p>Projeto AstroMatch realizado por Carolina Della Nina para a Labenu - setembro de 2020</p>
    </div>
  );
}

export default App;
