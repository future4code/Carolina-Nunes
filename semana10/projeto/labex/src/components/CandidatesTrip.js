import React, { useState } from 'react';
import axios from 'axios';
import { CardDiv, TextList } from '../styled/ListTripsStyled';
import { useParams, useHistory } from "react-router-dom";
import { useProtectPage } from '../hooks/useProtectPage'
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

export default function CandidatesTrips(){
  const [candidates, setCandidates] = useState([])
  const pathParams = useParams()
  const history = useHistory();

  const getCandidate = () => {
    axios
    .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carolina-jackson/trips/${pathParams.tripId}/candidates/${pathParams.candidateId}/decide`, {
        headers: {
          auth: localStorage.getItem("token")
        }
    })
    .then((response) => {
      setCandidates(response.data.token)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  useProtectPage(getCandidate)

  return(
    <MuiThemeProvider theme={myTheme}>
      <TextList>
        PAINEL ADMINISTRADOR -- Viajantes cadastrados:
      </TextList>
        {candidates.map((candidate) => {
          return(
            <CardDiv>
              <Card variant="outlined">
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h4" component="h2">
                      {candidate.name}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {candidate.age} anos
                    </Typography>
                    <Typography variant="h6" component="p">
                      {candidate.profession}
                    </Typography>
                    <Typography variant="h6" component="p">
                      {candidate.country}
                    </Typography>
                    <Typography variant="h6" color="textSecondary" component="p">
                      {candidate.applicationText}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button 
                    // onClick={() => goToDetailTripPage(history, trip.id)}
                    size="small" 
                    color="primary"
                    variant="contained">
                    APROVAR
                  </Button>
                  <Button 
                    // onClick={() => goToDetailTripPage(history, trip.id)}
                    size="small" 
                    color="secondary"
                    variant="contained">
                    REPROVAR
                  </Button>
                </CardActions>
              </Card>
            </CardDiv>
          )
        })}
           
    </MuiThemeProvider>

  )
}