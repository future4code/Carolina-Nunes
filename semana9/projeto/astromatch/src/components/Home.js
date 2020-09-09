import React, { useState } from 'react';
import style from 'styled-components';
import axios from 'axios';
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Home() {
    const [people, setPeople] = useState([])

    const getProfile = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person")
        .then((response) => {
            console.log(response)
            setPeople(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const getMatches = () => {
        axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
        .then((response) => {
            console.log(response)
            setPeople(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    // componentDidMount(){
    //     getProfile()
    // }

    return(
        <div>
            <Box>
                <div>
                    <h3>AstroMatch</h3>
                </div>
                <CardMedia 

                />

                <CardContent>
                    <Typography>oi</Typography>
                    <Typography>alo</Typography>
                </CardContent>
                   
                <Box>
                    <Button variant="contained" color="secondary" >NÃO</Button>
                    <Button variant="contained" color="primary" >SIM</Button>
                </Box>
                
            </Box>

        </div>
    )
}