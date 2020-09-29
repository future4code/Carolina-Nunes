import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import MainAppBar from './components/AppBar/MainAppBar'
import MainFooterBar from './components/FooterBar/MainFooterBar'
import styled from 'styled-components'

const InnerScreenContainer = styled.div`
  margin-top: 10%;
`

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MainAppBar/>
        <InnerScreenContainer>
          <Router/>
        </InnerScreenContainer>
        <MainFooterBar/>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
