import React, { useState } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import MainAppBar from './components/AppBar/MainAppBar'
import MainFooterBar from './components/FooterBar/MainFooterBar'
import styled from 'styled-components'

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`

const App = () => {
  const token = localStorage.getItem("token")
  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login")

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MainAppBar buttonName={buttonName} setButtonName={setButtonName}/>
        <InnerScreenContainer>
          <Router setButtonName={setButtonName}/>
        </InnerScreenContainer>
        <MainFooterBar/>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
