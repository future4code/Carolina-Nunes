import React, { useState, useEffect } from 'react';
import { FooterClear }from './Styled';
import axios from 'axios';
import Button from '@material-ui/core/Button';


export default function FooterPage(){
    const [delMatches, setDelMatches] = useState("")



    const clearMatches = () => {
        const request = axios
        .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carolina/clear")
        request 
        .then((response) => {
            setDelMatches(response.data.id)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        
        <div>
            <FooterClear>
                <Button onClick={() => clearMatches()} variant="contained" style={{ fontSize: 20 }}>Limpar matches</Button>
            </FooterClear>

        </div>

    )

}