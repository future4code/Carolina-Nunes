import React from 'react';
import axios from 'axios';
import { Task, myTheme } from './Styled'
import { useForm } from '../hooks/useForm'
import {
    Typography,
    Button,
    Select,
    MenuItem,
    TextField,
    MuiThemeProvider
} from '@material-ui/core';

export default function Header(props){

    const { form, onChange, resetState } = useForm({
        text: "",
        day: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmittion = (event) => {
        event.preventDefault()
    }

    const createTask = () => {
        const body = {
            text: form.text,
            day: form.day
        }
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-carolina", body)
        .then((response) => {
            alert("Tarefa criada com sucesso")
            resetState()
            props.updateTasks()
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return(
        <MuiThemeProvider theme={myTheme}>
            <Task>
                <form noValidate={false} onSubmit={handleSubmittion}>
                    <Typography variant="h5" for="text">CADASTRAR NOVA TAREFA</Typography>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        style={{ width: 400 }} 
                        label="Tarefa"
                        id="text" 
                        name="text"
                        type="text" 
                        value={form.text}
                        onChange={handleInputChange}
                        inputProps={{
                            pattern: "[A-Za-z ]{5,}", 
                            required: true,
                            title: "Insira, no minimo, 5 letras"
                        }}
                    />
                    <br>
                    </br>
                    <Select
                        variant="outlined" 
                        labelId="demo-simple-select-outlined-label"
                        id="day"
                        name="day"
                        color="secondary"
                        style={{ width: 200 }}
                        onChange={handleInputChange}
                        value={form.day}
                        >
                        <MenuItem value={""}></MenuItem>
                        <MenuItem value={"Domingo"}>Domingo</MenuItem>
                        <MenuItem value={"Segunda"}>Segunda</MenuItem>
                        <MenuItem value={"Terca"}>Terça</MenuItem>
                        <MenuItem value={"Quarta"}>Quarta</MenuItem>
                        <MenuItem value={"Quinta"}>Quinta</MenuItem>
                        <MenuItem value={"Sexta"}>Sexta</MenuItem>
                        <MenuItem value={"Sabado"}>Sábado</MenuItem>
                    </Select>
                    <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ margin: 20 }}
                    onClick={createTask}
                    >
                    CRIAR TAREFA
                    </Button>
                </form>
                    

        
            </Task>
        </MuiThemeProvider>
    )
}