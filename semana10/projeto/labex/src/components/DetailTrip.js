import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
import { goToAppFormPage } from './GoToPages'
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

export default function DetailTrip(){
    const [trip, setTrip] = useState({})
    const history = useHistory();
    const pathParams = useParams()


    useEffect(() => {
        getTripDetail()
    }, [])

    const getTripDetail = () => {
        const request = axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trip/${pathParams.id}`)

        request
        .then((response) => {
            setTrip(response.data.trip)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <MuiThemeProvider theme={myTheme}>
            <Card variant="outlined">
                <CardContent>
                        <Typography component="h2">
                            {trip.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {trip.description}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="h4">
                            {trip.planet}
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="h5">
                            {trip.date}
                            {trip.durationInDays} dias
                            {trip.candidates}
                        </Typography>
                </CardContent>
                <CardActions>
                        <Button 
                            onClick={() => goToAppFormPage(history)}
                            size="small" 
                            color="primary"
                            variant="contained">
                            Quero me inscrever!
                        </Button>
                </CardActions>
            </Card>
        </MuiThemeProvider>

    )
}