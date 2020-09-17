import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { TextLogin } from '../styled/LoginPageStyled';
import { myTheme } from '../styled/MyTheme';
import {
    MuiThemeProvider,
    Typography,
    Button,
    TextField
} from '@material-ui/core';


export default function LoginPage(){
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const history = useHistory();
    const pathParams = useParams()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            history.push(`/trips/list/admin`)
        }
    }, [history])

    const onChangeEmailInput = (event) => {
        setEmailValue(event.target.value)
    }

    const onChangePasswordInput = (event) => {
        setPasswordValue(event.target.value)
    }

    const handleLogin = () => {
        const body = {
            email: emailValue,
            password: passwordValue
        }

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/login", body)
        .then((response) => {
            localStorage.setItem("token", response.data.token);
            history.push(`/trips/list/admin`)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return(
        <MuiThemeProvider theme={myTheme}>
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
            <br></br>
            <Button 
                onClick={handleLogin}
                size="large" 
                color="primary"
                style={{ margin: 10 }} 
                variant="contained">LOGIN
            </Button>
        </MuiThemeProvider>

    )
}