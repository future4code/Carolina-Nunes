import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header'
import { useStyles } from './Styled'
import DeleteIcon from '@material-ui/icons/Delete';
import {
    Typography,
    Paper,
    IconButton,
    Divider, 
    TextField
} from '@material-ui/core';

export default function Planner(){
    const classes = useStyles();

    const [task, setTask] = useState([])
    

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-carolina")
        .then((response) => {
            setTask(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const deleteTask = (id) => {
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-carolina/${id}`)
        .then((response) => {
            alert("Tarefa deletada")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const taskDays = (day) => {
        const renderDays = task.map((task) => {
            if (task.day === day){
                return(
                    <div>
                        <p>
                            {task.text}
                            <IconButton>
                                <DeleteIcon onClick={() => deleteTask(task.id)} size="small" />
                            </IconButton>
                        </p>
                        <Divider variant="middle" />
                    </div>
                )
            }
        })
        return renderDays
    }


    return(
        <div>
            <Header updateTasks={getTasks}/>
            <div className={classes.root}>
                <Paper elevation={3}>
                    <Typography variant="h5">Domingo</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Domingo")}</Typography>
                    
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Segunda-feira</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Segunda")}</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Terça-feira</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Terca")}</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Quarta-feira</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Quarta")}</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Quinta-feira</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Quinta")}</Typography>
                </Paper>

                <Paper elevation={3}>                    
                    <Typography variant="h5">Sexta-feira</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Sexta")}</Typography>               
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Sábado</Typography>
                    <Divider variant="inset" />
                    <Typography variant="body1">{taskDays("Sabado")}</Typography>
                </Paper>
            </div>
        </div>
    )
}