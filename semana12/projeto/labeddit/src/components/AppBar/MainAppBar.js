import React from 'react'
import {
    AppBar,
    Toolbar,
    Button,
} from '@material-ui/core'
import { LogoImage, DivButton } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToHome } from '../../routes/Coordinator'



const MainAppBar = () => {
  const history = useHistory()
  return(
    <AppBar color="secondary">
      <Toolbar>
        <LogoImage alt={'Logo'} src={LabEddit}/>
        <DivButton>
          <Button onClick={() => goToLogin(history)}>Login</Button>
          <Button onClick={() => goToHome(history)}>Logout</Button>
        </DivButton>
      </Toolbar>
    </AppBar>
  )
}

export default MainAppBar