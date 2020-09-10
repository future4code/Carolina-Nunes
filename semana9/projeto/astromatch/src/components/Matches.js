import React, { useState, useEffect } from 'react';
import { BoxCard, ImgMatch, MatchesIcon }from './Styled';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

export default function Matches(){
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches();
    }, []);

    const getMatches = () => {
        const request = axios
        .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina/matches")
        
        request
        .then((response) => {
            console.log(response)
            setMatches(response.data.matches)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    if (matches === undefined){
        return <Typography variant="subtitle1">carregando...</Typography>
    }
    return(
        
        <div>
            {matches.length === 0 &&
                <Typography variant="h5">Você ainda não tem nenhum match! <i class="em em-worried" aria-role="presentation" aria-label="WORRIED FACE"></i></Typography>
            }
            {matches.length > 0 &&
                <Typography variant="h5">Você tem novos matches! <i class="em em-smile" aria-role="presentation" aria-label="SMILING FACE WITH OPEN MOUTH AND SMILING EYES"></i></Typography>
            }
            <BoxCard>
                {matches.map((match) => {
                    return (
                        <MatchesIcon>
                            <ImgMatch src={match.photo}></ImgMatch>
                            <Typography variant="h5">{match.name} - {match.age} anos</Typography>
                        </MatchesIcon>
                    )
                })}
            </BoxCard>

        </div>

    )

}