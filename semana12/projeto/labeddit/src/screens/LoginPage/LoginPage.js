import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToSignUp } from '../../routes/Coordinator'
import { DivLogin, DivButton } from './Styled'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {
  Button,
  Typography,
  TextField
} from '@material-ui/core'


const LoginPage = () => {
  const history = useHistory()
  useUnprotectedPage()

  const {form, handleInputChange} = useForm({
    email: "",
    password: ""
  })

  const handleSubmittionLogin = (event) => {
    event.preventDefault()
  }

  const onClickLogin = () => {
    const body = {
      email: form.email,
      password: form.password
    }
    axios
    .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login", body)
    .then((response) => {
      localStorage.setItem("token", response.data.token)
      history.push('/posts')
    })
    .catch((error) => {
      alert("Erro ao fazer login")
    })
  }

  
  return (
    <div>
      <form noValidate={false} onSubmit={handleSubmittionLogin}>
        <DivLogin>
          <TextField
            label="E-mail"
            variant="outlined" 
            style={{ width: 400 }} 
            id="email" 
            name="email"
            type="email" 
            value={form.email}
            onChange={handleInputChange}
            inputProps={{
                pattern: "[A-Za-z ]{5,}", 
                required: true,
                title: "Insira, no minimo, 5 letras"
            }}
          />
          <TextField
            label="Senha"
            variant="outlined" 
            style={{ width: 400 }} 
            id="password" 
            name="password"
            type="password" 
            value={form.password}
            onChange={handleInputChange}
            inputProps={{
                pattern: "[A-Za-z ]{5,}", 
                required: true,
                title: "Insira, no minimo, 5 letras"
            }}
          />
        </DivLogin>
        <DivButton>
          <Button 
            size="large" 
            variant="contained"
            style={{ width: 200 }}
            onClick={onClickLogin}>
              LOGIN
          </Button>
        </DivButton>
        <DivButton>
          <Button 
            size="small"
            color="primary"
            variant="contained"
            style={{ width: 200 }}
            onClick={() => goToSignUp(history)}>
              Não tem cadastro? Clique aqui!
          </Button>
        </DivButton>
      </form>

    </div>

  )
}

export default LoginPage