import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { goToListTripAdmPage } from '../GoToPages'
import { TextList } from '../ListTrips/ListTripsStyled';
import { useParams, useHistory } from "react-router-dom";
import { useProtectPage } from '../../hooks/useProtectPage'
import { myTheme } from '../../styled/MyTheme'
import {
    MuiThemeProvider,
    Card, 
    CardContent, 
    Typography,
    Button,
} from '@material-ui/core';


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

    useEffect(() => {
        getTripDetail()
    }, [])

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
            <Button variant="contained" color="primary" size="large" style={{ margin: 10 }} onClick={() => goToListTripAdmPage(history)}>
                Voltar para a lista de viagens
            </Button>
        </MuiThemeProvider>

    )
}