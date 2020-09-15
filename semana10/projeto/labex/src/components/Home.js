import React from 'react';
import { useHistory } from "react-router-dom";
import { goToAppFormPage, goToListTripPage} from './GoToPages'
import { CardHome, Text } from '../styled/HomeStyled'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {
    Card, 
    CardActionArea, 
    CardActions, 
    CardContent, 
    CardMedia,
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

export default function Home(){
    const history = useHistory();

    return(
        <MuiThemeProvider theme={myTheme}>
            <Text>
                Viagens em destaque:
            </Text>
            <CardHome>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Marte"
                        height="180"
                        image="data:image/jpeg;base64,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"
                        title="Marte"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Festança Marciana
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Uma viagem bem legal, na melhor época de marte.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                        onClick={() => goToAppFormPage(history)}
                        size="small" 
                        color="secondary">
                        Quero me inscrever!
                    </Button>
                </CardActions>
            </Card>

            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Plutao"
                        height="180"
                        image="data:image/jpeg;base64,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QyQ3WTc30yjkNZXO/Dzq1Al4zmjIywW3OzZI0gkED9l01OiarvmFwgeJtjIkiJvpbfkU0wt1Vq/Gy0TuBbkYv7qk4jW9CsurQDPOe039LyqziOIUyKWq7iWMy3k32F1Q4jjZuP19O63cSxGp1+7k/e653Fvlx0PPvZaKTT1jcaXnooiIiRERAREQEREBERAREQEREBERAREQEREBERAREQEREBXvw/xj5c0al6Tv+juY6cx9miRRZtOOVl3H0Gpg25ZBaRqCL2/bqq9+Fc0lpEGAe4PJc/w3i9SjYElvL9uSuW8XY8Zs0GLtPkLcjYWWfhp0Tn37bzhySABc6eqlVcCYDpAtfpA7dFoZXu0mC3UdCQZ/IK2xVZph17XsR/lmD009N08U3lV1LAZiRbSQQNDJ8PW33z3UcDEOhki5BzQW8o27yrSkWCHAi4sNY8M9jadVqq41v90ae/tGytIxy5E7AUcgzOdmMAkNs0C5EAid+i31McA0uPh6wbhotoep3XPu4qAwAloiIbbc28M3Md1V47iDsziQJsPqJ9GAT6+ytpnbtbv4mD4xZmk894mNp2J5bSarG8TaZuqTEcUJudQI7C066G3PyVbUqk8vKymIs2k4zGF3399FDKwiJEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWVhEG+linN0O0eSmM4w/LlPtI/IhViILgcccJif0iI05wtdXjDyIBMX6c/0sqtEEn/GOmf8A31Xh+Jcd40sNLLSiDJWERAREQEREBERAREQEREBERAREQEREH//Z"
                        title="Plutao"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Picnic de Inverno em Plutão
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Único tour que fazemos em planeta anão no sistema solar! Levem casacos que a previsão é de −230 °C.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button 
                        onClick={() => goToAppFormPage(history)}
                        size="small" 
                        color="secondary">
                        Quero me inscrever!
                    </Button>
                </CardActions>
            </Card>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Netuno"
                        height="180"
                        image="data:image/jpeg;base64,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"
                        title="Netuno"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Surfando em Netuno
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Nenhum surfista intergalático pode ficar fora dessa!
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={() => goToAppFormPage(history)}
                        size="small" 
                        color="secondary">
                        Quero me inscrever!
                    </Button>
                </CardActions>
            </Card>

            </CardHome>
            <Button onClick={() => goToListTripPage(history)}
                variant="contained" 
                color="primary" 
                size="large">
                Clique aqui para visualizar mais viagens!
            </Button>
        </MuiThemeProvider>

    )
}