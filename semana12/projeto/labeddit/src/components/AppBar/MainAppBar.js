import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    Typography,
} from '@material-ui/core'
import { LogoImage, DivButton, AppBarButton } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToHome } from '../../routes/Coordinator'

const MainAppBar = (props) => {
  const {buttonName, setButtonName} = props
  const history = useHistory()
 
  const logout = () => {
    localStorage.removeItem('token')
  }

  const appBarAction = () => {
    const token = localStorage.getItem("token")
    if (token) {
      logout()
      setButtonName("Login")
    }
    goToLogin(history)
  }

  return(
    <AppBar color="secondary">
      <Toolbar>
        <DivButton>
          <AppBarButton onClick={() => goToHome(history)}>
            <LogoImage alt={'Logo'} src={LabEddit}/>
          </AppBarButton>
          <AppBarButton 
            
            onClick={appBarAction}>
            <Typography variant="button">{buttonName}</Typography>
          </AppBarButton>
        </DivButton>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar