import React from 'react';
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

export default function Planner(){
    const { form, onChange, resetState } = useForm({

    })



    return(
        <MuiThemeProvider theme={myTheme}>
            <Task>
                <form>
                    <Typography variant="h5" for="newTask">CADASTRAR NOVA TAREFA</Typography>
                    <TextField
                        variant="outlined"
                        color="secondary"
                        style={{ width: 400 }} 
                        label="Tarefa"
                        id="name" 
                        name="name"
                        type="text" 
                        // value={form.name}
                        // onChange={handleInputChange}
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
                        id="newTask"
                        name="newTask"
                        color="secondary"
                        style={{ width: 200 }}
                        // onChange={handleInputChange}
                        // value={form.planet}
                        >
                        <MenuItem value={""}></MenuItem>
                        <MenuItem value={"Domingo"}>Domingo</MenuItem>
                        <MenuItem value={"Segunda"}>Segunda</MenuItem>
                        <MenuItem value={"Terça"}>Terça</MenuItem>
                        <MenuItem value={"Quarta"}>Quarta</MenuItem>
                        <MenuItem value={"Quinta"}>Quinta</MenuItem>
                        <MenuItem value={"Sexta"}>Sexta</MenuItem>
                        <MenuItem value={"Sábado"}>Sábado</MenuItem>
                    </Select>
                    <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{ margin: 20 }}
                    >
                    Criar tarefa
                    </Button>
                </form>
                    

        
            </Task>
        </MuiThemeProvider>
    )
}