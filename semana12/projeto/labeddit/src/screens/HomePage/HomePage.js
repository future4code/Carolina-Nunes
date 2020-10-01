import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToSignUp } from '../../routes/Coordinator'
import { DivHome, LogoPage } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {
  Button,
  Typography,
} from '@material-ui/core'

const HomePage = () => {
  useUnprotectedPage()
  const history = useHistory()

  return (
    <DivHome>
      <LogoPage alt={'Logo'} src={LabEddit}/>
      <Typography align="center" variant="h6">Entre e acesse os nossos posts!</Typography>
        <Button 
          color="primary"
          size="large" 
          variant="contained"
          style={{ width: 400 }}
          onClick={() => goToLogin(history)}>
            LOGIN
        </Button>
        <br></br>
        <Button 
          color="primary"
          size="large" 
          style={{ width: 400 }}
          onClick={() => goToSignUp(history)}>
            Não tem cadastro? Clique aqui!
        </Button>

    </DivHome>

  )
}

export default HomePage