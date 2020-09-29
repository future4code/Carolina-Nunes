import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin, goToSignUp } from '../../routes/Coordinator'
import { DivHome } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import {
  Button,
  Typography,
} from '@material-ui/core'

const HomePage = () => {
  const history = useHistory()


  return (
    <div>
      <Typography align="center" variant="h5">Entre e tenha acesso aos nossos posts!</Typography>
      <DivHome>
        <Button 
          size="large" 
          variant="contained"
          style={{ marginRight: 10 }}
          style={{ width: 400 }}
          onClick={() => goToLogin(history)}>
            LOGIN
        </Button>
        <br></br>
        <Button 
          color="primary"
          size="large" 
          variant="contained"
          style={{ width: 400 }}
          onClick={() => goToSignUp(history)}>
            CADASTRE-SE!
        </Button>
      </DivHome>

    </div>

  )
}

export default HomePage