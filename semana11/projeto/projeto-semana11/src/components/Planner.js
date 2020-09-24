import React from 'react';
import { WeekGroup, useStyles} from './Styled'
import {
    Typography,
    Paper
} from '@material-ui/core';

export default function Planner(){
    const classes = useStyles();

    return(
        <WeekGroup>
            <div className={classes.root}>
                <Paper elevation={3}>
                    <Typography variant="h5">Domingo</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Segunda-feira</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Terça-feira</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Quarta-feira</Typography>
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Quinta-feira</Typography>
                </Paper>

                <Paper elevation={3}>                    
                    <Typography variant="h5">Sexta-feira</Typography>               
                </Paper>

                <Paper elevation={3}>
                    <Typography variant="h5">Sábado</Typography>
                </Paper>
            </div>
        </WeekGroup>
    )
}