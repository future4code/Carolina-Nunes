import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme'
import Router from './routes/Router'
import { BrowserRouter } from 'react-router-dom'
import MainAppBar from './components/AppBar/MainAppBar'
import styled from 'styled-components'

const InnerScreenContainer = styled.div`
  padding-top: 7%;
`

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <MainAppBar/>
        <InnerScreenContainer>
          <Router/>
        </InnerScreenContainer>
      </BrowserRouter>
    </MuiThemeProvider>
  )
}

export default App
