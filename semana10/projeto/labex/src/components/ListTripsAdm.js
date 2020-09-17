import React, { useState } from 'react';
import axios from 'axios';
import { CardDiv, TextList } from '../styled/ListTripsStyled';
import { useProtectPage } from '../hooks/useProtectPage'
import { useHistory } from "react-router-dom";
import { goToDetailTripPage, goToCandidatesTripPage, goToCreateTripPage} from './GoToPages'
import { myTheme } from '../styled/MyTheme'
import {
    MuiThemeProvider,
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    Typography,
    Button,
} from '@material-ui/core';


export default function ListTripsAdm(){
    const [trips, setTrips] = useState([])
    const history = useHistory();


    const getTrips = () => {
        axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trips")
        .then((response) => {
            setTrips(response.data.trips)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    useProtectPage(getTrips)

    return(
        <MuiThemeProvider theme={myTheme}>
            <TextList>
               PAINEL ADMINISTRADOR -- Viagens cadastradas:
            </TextList>
                <Button 
                onClick={() => goToCandidatesTripPage(history)}
                size="large" 
                color="primary"
                style={{ margin: 10 }} 
                variant="contained">Gerenciar viajantes</Button>
                <Button 
                onClick={() => goToCreateTripPage(history)}
                size="large" 
                color="primary"
                style={{ margin: 10 }} 
                variant="contained">Criar novas viagens</Button>
            {trips.map((trip) => {
                return(
                    <CardDiv>
                        <Card variant="outlined">
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {trip.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {trip.description}
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="h4">
                                        {trip.planet}
                                    </Typography>
                                    <Typography variant="body1" color="textPrimary" component="h5">
                                        {trip.date} - {trip.durationInDays} dias
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button 
                                    onClick={() => goToDetailTripPage(history, trip.id)}
                                    size="small" 
                                    color="secondary"
                                    variant="contained">
                                    Visualizar detalhe da viagem
                                </Button>
                            </CardActions>
                        </Card>
                    </CardDiv>
                )
            })}
        </MuiThemeProvider>

    )
}