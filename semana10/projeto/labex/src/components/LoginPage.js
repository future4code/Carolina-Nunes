import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TextLogin } from '../styled/LoginPageStyled';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    Typography,
    Button,
    TextField
} from '@material-ui/core';


export const Rotulo = styled.label`
  margin: 6px;
`

export default function LoginPage(){
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const onChangeEmailInput = (e) => {
        setEmailValue(e.target.value)
    }

    const onChangePasswordInput = (e) => {
        setPasswordValue(e.target.value)
    }

    const getLogin = () => {
        const request = axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/login")
    }

    return(
        <div>
            <TextLogin>Login de Administrador</TextLogin>
            <Typography for="email">E-mail:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="email" 
            value={emailValue}
            onChange={onChangeEmailInput}
            />
            <Typography for="password">Senha:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="password" 
            value={passwordValue}
            onChange={onChangePasswordInput}
            />
        </div>

    )
}