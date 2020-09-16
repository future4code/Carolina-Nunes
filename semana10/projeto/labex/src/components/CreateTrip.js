import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProtectPage } from '../hooks/useProtectPage'
import { useParams, useHistory } from "react-router-dom";
import { TextCreate } from '../styled/CreateTripStyled';
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

export default function CreateTrip(){
    const [nameValue, setNameValue] = useState("")
    const [planetValue, setPlanetValue] = useState("")
    const [dateValue, setDateValue] = useState("")
    const [descriptionValue, setDescriptionValue] = useState("")
    const [durationValue, setDurationValue] = useState(0)
    const history = useHistory();
    const pathParams = useParams()

    const onChangeName = (event) => {
        setNameValue(event.target.value)
    }

    const onChangePlanet = (event) => {
        setPlanetValue(event.target.value)
    }

    const onChangeDate = (event) => {
        setDateValue(event.target.value)
    }

    const onChangeDescription = (event) => {
        setDescriptionValue(event.target.value)
    }

    const onChangeDuration = (event) => {
        setDurationValue(event.target.value)
    }

    const createTrip = () => {
        const body = {
            name: nameValue,
            planet: planetValue,
            date: dateValue,
            description: descriptionValue,
            durationInDays: durationValue
        }

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trips", body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
            setNameValue("")
            alert("Viagem cadastrada com sucesso!")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useProtectPage(createTrip)

    return(
        <MuiThemeProvider theme={myTheme}>
            <TextCreate>Cadastro de viagens</TextCreate>
            <Typography for="name">Nome:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="name" 
            value={nameValue}
            onChange={onChangeName}
            />
            <Typography for="planet">Planeta:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 400 }} 
            type="text" 
            id="planet" 
            value={planetValue}
            onChange={onChangePlanet}
            />
            <Typography for="date">Data:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 200 }} 
            type="text" 
            id="date" 
            value={dateValue}
            onChange={onChangeDate}
            />
            <Typography for="description">Descrição:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 600 }} 
            type="text" 
            id="description" 
            value={descriptionValue}
            onChange={onChangeDescription}
            />
            <Typography for="duration">Duração em dias:</Typography>
            <TextField 
            label="" 
            variant="outlined" 
            style={{ width: 200 }} 
            type="number" 
            id="duration" 
            value={durationValue}
            onChange={onChangeDuration}
            />
            <br></br>
            <Button variant="contained" color="primary" style={{ margin: 10 }} size="large" onClick={createTrip}>
                CRIAR VIAGEM
            </Button>
        </MuiThemeProvider>

    )
}