import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TextForm } from '../styled/AppFormStyled';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
    Typography,
    Button,
    TextField
} from '@material-ui/core';

const myTheme = createMuiTheme({
    palette:{
      primary: {
        main:"#204473"
      },
      secondary:{
        main:"#F2AF88"
      }
    }
})
export default function AppForm(){
  

    return(
        <MuiThemeProvider theme={myTheme}>
            <TextForm>Formulário de cadastro</TextForm>
            <Typography for="name">Nome:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="name" 
            // value={emailValue}
            // onChange={onChangeEmailInput}
            />
            <Typography for="age">Idade:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="number" 
            id="age" 
            // value={passwordValue}
            // onChange={onChangePasswordInput}
            />
            <Typography for="text">Por que você quer viajar?</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="text" 
            // value={passwordValue}
            // onChange={onChangePasswordInput}
            />
            <Typography for="profession">Profissão:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="profession" 
            // value={passwordValue}
            // onChange={onChangePasswordInput}
            />
            <Typography for="country">País:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="country" 
            // value={passwordValue}
            // onChange={onChangePasswordInput}
            />
            <br></br>
            <Button variant="contained" color="primary" size="large" style={{ margin: 10 }} >
                Quero viajar!
            </Button>
        </MuiThemeProvider>

    )
}