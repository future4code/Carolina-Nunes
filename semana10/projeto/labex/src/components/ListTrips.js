import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardDiv, TextList } from '../styled/ListTripsStyled';
import { useHistory } from "react-router-dom";
import { goToAppFormPage, goToDetailTripPage} from './GoToPages'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    Typography,
    Button,
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

export default function ListTrips(){
    const [trips, setTrips] = useState([])
    const history = useHistory();

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        const request = axios
        .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trips")

        request
        .then((response) => {
            setTrips(response.data.trips)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <MuiThemeProvider theme={myTheme}>
            <TextList>
                Viagens disponíveis:
            </TextList>
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
                                    onClick={() => goToAppFormPage(history)}
                                    size="small" 
                                    color="primary"
                                    variant="contained">
                                    Quero me inscrever!
                                </Button>
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