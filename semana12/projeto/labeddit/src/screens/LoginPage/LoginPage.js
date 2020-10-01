import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import { DivLogin, DivButton, LogoLogin, Container } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {
  Button,
  Typography,
  TextField
} from '@material-ui/core'
import { login } from '../../services/user'


const LoginPage = (props) => {
  useUnprotectedPage()
  const history = useHistory()

  const {form, handleInputChange} = useForm({
    email: "",
    password: ""
  })
  
  const onClickLogin = (event) => {
    event.preventDefault()
    const element = document.getElementById('login_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid){
      login(form, history, props.setButtonName)
    }
  }

  
  return (
    <Container>
      <DivLogin>
        <LogoLogin alt={'Logo'} src={LabEddit}/>
        <form noValidate={false} id={"login_form"}>
            <TextField
              label="E-mail"
              variant="outlined" 
              fullWidth
              margin="normal"
              autoFocus
              required
              id="email" 
              name="email"
              type="email" 
              value={form.email}
              onChange={handleInputChange}
            />
            <TextField
              label="Senha"
              variant="outlined" 
              fullWidth
              margin="normal"
              required
              id="password" 
              name="password"
              type="password" 
              value={form.password}
              onChange={handleInputChange}
            />
          <DivButton>
            <Button 
              size="large" 
              color="primary"
              variant="contained"
              type="submit"
              style={{ width: 200 }}
              onClick={onClickLogin}>
                LOGIN
            </Button>
          </DivButton>
          <DivButton>
            <Button 
              size="large"
              color="primary"
              style={{ width: 400 }}
              onClick={() => goToSignUp(history)}>
                Não tem cadastro? Clique aqui!
            </Button>
          </DivButton>
        </form>
      </DivLogin>
    </Container>

  )
}

export default LoginPage