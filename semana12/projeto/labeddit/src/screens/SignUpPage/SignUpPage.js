import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { DivSign, DivButton, LogoSign } from './Styled'
import LabEddit from '../../assets/LabEddit.png'
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import {
  Button,
  Typography,
  TextField
} from '@material-ui/core'
import { signUp } from '../../services/user'

const SignUpPage = (props) => {
  useUnprotectedPage()
  const history = useHistory()

  const {form, handleInputChange} = useForm({
    email: "",
    password: "",
    username: "",
  })

  const onClickSignUp = (event) => {
    event.preventDefault()
    const element = document.getElementById("signup_form")
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid){
      signUp(form, history, props.setButtonName)
    }
  }


  return (
    <div>
      <form noValidate={false} id={"signup_form"}>
        <DivSign>
          <LogoSign alt={'Logo'} src={LabEddit}/>
          <Typography variant="h6">Cadastre-se! É super rápido. =)</Typography>
          <TextField
            label="Nome de usuário"
            variant="outlined" 
            style={{ width: 400 }} 
            margin="normal"
            autoFocus
            required
            id="username" 
            name="username"
            type="text" 
            value={form.username}
            onChange={handleInputChange}
            inputProps={{
                pattern: "[A-Za-z ]{5,}", 
                title: "Insira, no minimo, 5 letras"
            }}
          />
          <TextField
            label="E-mail"
            variant="outlined" 
            style={{ width: 400 }} 
            margin="normal"
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
            style={{ width: 400 }} 
            margin="normal"
            required
            id="password" 
            name="password"
            type="password" 
            value={form.password}
            onChange={handleInputChange}
          />
        </DivSign>
        <DivButton>
          <Button 
            size="large" 
            variant="contained"
            color="primary"
            style={{ width: 200 }}
            onClick={onClickSignUp}>
              CADASTRAR
          </Button>
        </DivButton>
      </form>
    </div>

  )
}

export default SignUpPage