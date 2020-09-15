import React from 'react';
import {Button,createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import { ButtonDiv, HeaderContainer } from '../styled/HeaderStyled'
import { goToLoginPage, goToHome } from './GoToPages'
import { useHistory } from "react-router-dom";


const myTheme = createMuiTheme({
    palette:{
      primary: {
        main:"#204473"
      },
      secondary:{
        main:"#F2AF88"
      }
    }
})

export default function Header(){
  const history = useHistory();

    return(
        <MuiThemeProvider theme={myTheme}>

            <HeaderContainer>
                <HomeIcon onClick={() => goToHome(history)} color="primary" style={{ fontSize: 60 }}/>
                <h1>LabeX</h1>
                <ButtonDiv>
                    <Button onClick={() => goToLoginPage(history)} variant="contained" color="primary" size="large">LOGIN</Button>
                </ButtonDiv>
            </HeaderContainer>
        </MuiThemeProvider>

    )
}