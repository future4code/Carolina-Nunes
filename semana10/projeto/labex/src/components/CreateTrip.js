import React from 'react';
import axios from 'axios';
import { TextCreate } from '../styled/CreateTripStyled';
import { useForm } from '../hooks/useForm';
import { myTheme } from '../styled/MyTheme'
import {
    MuiThemeProvider,
    Typography,
    Button,
    TextField,
    Select,
    MenuItem,
    Input
} from '@material-ui/core';

export default function CreateTrip(){
    const { form, onChange, resetState } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: 0,
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target

        onChange(name, value)
    }

    const handleSubmittion = (event) =>{
        event.preventDefault()

        resetState()
    }

    const createTrip = () => {
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }
    
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trips", body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
            alert("Viagem cadastrada com sucesso!")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    // useProtectPage(createTrip)

    return(
        <MuiThemeProvider theme={myTheme}>
            <TextCreate>Cadastro de viagens</TextCreate>
            <form onSubmit={handleSubmittion}>

                <Typography for="name">Nome:</Typography>
                <TextField 
                    variant="outlined" 
                    style={{ width: 400 }} 
                    id="name" 
                    name="name"
                    type="text" 
                    value={form.name}
                    onChange={handleInputChange}
                    pattern="[A-Za-z]{5,}"
                    title="Insira, no minimo, 5 letras"
                    required
                />
                <Typography for="planet">Planeta:</Typography>
                <Select
                    variant="outlined" 
                    labelId="demo-simple-select-outlined-label"
                    id="planet"
                    name="planet"
                    color="primary"
                    style={{ width: 200 }}
                    onChange={handleInputChange}
                    value={form.planet}>
                    <MenuItem value={""}></MenuItem>
                    <MenuItem value={"Mercurio"}>Mercúrio</MenuItem>
                    <MenuItem value={"Venus"}>Vênus</MenuItem>
                    <MenuItem value={"Terra"}>Terra</MenuItem>
                    <MenuItem value={"Marte"}>Marte</MenuItem>
                    <MenuItem value={"Jupiter"}>Júpiter</MenuItem>
                    <MenuItem value={"Saturno"}>Saturno</MenuItem>
                    <MenuItem value={"Urano"}>Urano</MenuItem>
                    <MenuItem value={"Netuno"}>Netuno</MenuItem>
                    <MenuItem value={"Plutao"}>Plutão</MenuItem>
                </Select>
                <Typography for="date">Data:</Typography>
                <TextField 
                    variant="outlined" 
                    style={{ width: 200 }} 
                    id="date"
                    name="date"
                    type="text" 
                    value={form.date}
                    onChange={handleInputChange}
                    pattern="/^((?:(?=29[\/\-.]0?2[\/\-.](?:[1-9]\d)?(?:[02468][048]|[13579][26])(?!\d))29)|(?:(?=31[\/\-.](?!11)0?[13578]|1[02])31)|(?:(?=\d?\d[\/\-.]\d?\d[\/\-.])(?!29[\/\-.]0?2)(?!31)(?:[12][0-9]|30|0?[1-9])))[\/\-.](0?[1-9]|1[0-2])[\/\-.]((?:[1-9]\d)?\d{2})$/"
                    title="Coloque a data no formato dd/mm/aaaa"
                    required
                />
                <Typography for="description">Descrição:</Typography>
                <TextField 
                    variant="outlined" 
                    style={{ width: 600 }} 
                    id="description" 
                    name="description" 
                    type="text" 
                    value={form.description}
                    onChange={handleInputChange}
                    pattern="[A-Za-z]{50,}"
                    title="Insira, no minimo, 50 letras"
                    required
                />
                <Typography for="duration">Duração em dias:</Typography>
                <Input 
                    variant="outlined" 
                    style={{ width: 200 }} 
                    id="durationInDays" 
                    name="durationInDays" 
                    type="number"
                    value={form.durationInDays}
                    onChange={handleInputChange}
                    min="50"
                    required
                />
                <br></br>
                <Button variant="contained" color="primary" style={{ margin: 10 }} size="large" onClick={createTrip}>
                    CRIAR VIAGEM
                </Button>
            </form>
        </MuiThemeProvider>

    )
}