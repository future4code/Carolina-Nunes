import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextList } from '../styled/ListTripsStyled';
import { useParams, useHistory } from "react-router-dom";
import { useProtectPage } from '../hooks/useProtectPage'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
    Card, 
    CardContent, 
    Typography,
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

export default function DetailTrip(){
    const [trip, setTrip] = useState({})
    const pathParams = useParams()
    const history = useHistory();

    const getTripDetail = () => {
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
            console.log(response.data.trip)
            setTrip(response.data.trip)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useProtectPage(getTripDetail)
    
    return(
        <MuiThemeProvider theme={myTheme}>
            <TextList>
                Detalhe da viagem
            </TextList>
            <Card variant="outlined">
                <CardContent>
                        <Typography variant="h3" component="h1">
                            {trip.name}
                        </Typography>
                        <Typography variant="h6" color="textSecondary" component="p">
                            {trip.description}
                        </Typography>
                        <Typography variant="h4" color="textPrimary" component="h4">
                            {trip.planet}
                        </Typography>
                        <Typography variant="h5" color="textPrimary" component="h5">
                            Data da viagem: {trip.date}
                        </Typography>
                        <Typography variant="h5" color="textPrimary" component="h5">
                            Duração: {trip.durationInDays} dias
                        </Typography>
                </CardContent>
            </Card>
        </MuiThemeProvider>

    )
}