import React, { useState, useEffect } from 'react';
import { Header, BoxCard, ImgCard, Footer }from './Styled';
import axios from 'axios';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';


const myTheme = createMuiTheme({
    palette:{
      primary: {
        main:"#4caf50",
        contrastText: "#ffffff"
      },
      secondary:{
        main:"#f44336",
        contrastText: "#ffffff"
      }
    }
})


export default function Home() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile();
    }, []);

    const getProfile = () => {
        const request = axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina/person")

        request
        .then((response) => {
            console.log(response)
            setProfile(response.data.profile)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const clickChoice = (choice) => {
        const body = {
            id: profile.id,
            choice: choice
        }
        const request = axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina/choose-person", body)

        request
            .then((response) => {
                console.log("OK!", response.data)
                getProfile()
            })
            .catch((error) => {
                console.log("erro", error)
            })
    }

    return(
        <MuiThemeProvider theme={myTheme}>
            <BoxCard>
                <CardActionArea>
                    <CardMedia>
                        <ImgCard src={profile.photo} />
                    </CardMedia>

                    <CardContent>
                        <Typography variant="h4">{profile.name} - {profile.age} anos</Typography>
                        <Typography variant="h6">{profile.bio}</Typography>
                    </CardContent>
                </CardActionArea>
            </BoxCard>
            <Footer>
                <Button color="secondary" onClick={() => clickChoice(false)}>
                    <CancelIcon style={{ fontSize: 80 }}/>
                </Button>
                <Button color="primary" onClick={() => clickChoice(true)}>
                    <CheckCircleIcon style={{ fontSize: 80 }}/>
                </Button>
            </Footer>

        </MuiThemeProvider>
    )
}