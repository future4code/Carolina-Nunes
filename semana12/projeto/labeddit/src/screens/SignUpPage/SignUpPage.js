import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToFeed } from '../../routes/Coordinator'
import { DivSign, DivButton } from './Styled'
import {
  Button,
  Typography,
  TextField
} from '@material-ui/core'

const SignUpPage = () => {
  const history = useHistory()

  return (
    <div>
      <form>
        <DivSign>
          <TextField
            label="Nome de usuário"
            variant="outlined" 
            style={{ width: 400 }} 
            id="text" 
            name="text"
            type="text" 
            // value={form.name}
            // onChange={handleInputChange}
            inputProps={{
                pattern: "[A-Za-z ]{5,}", 
                required: true,
                title: "Insira, no minimo, 5 letras"
            }}
          />
          <TextField
            label="E-mail"
            variant="outlined" 
            style={{ width: 400 }} 
            id="email" 
            name="email"
            type="email" 
            // value={form.name}
            // onChange={handleInputChange}
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
            // value={form.name}
            // onChange={handleInputChange}
            inputProps={{
                pattern: "[A-Za-z ]{5,}", 
                required: true,
                title: "Insira, no minimo, 5 letras"
            }}
          />
        </DivSign>
        <DivButton>
          <Button 
            size="large" 
            variant="contained"
            color="primary"
            style={{ width: 200 }}
            onClick={() => goToFeed(history)}>
              CADASTRAR
          </Button>
        </DivButton>
      </form>
    </div>

  )
}

export default SignUpPage