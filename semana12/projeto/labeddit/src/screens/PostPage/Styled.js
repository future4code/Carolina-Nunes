import styled from "styled-components"
import {Card, CardActions} from '@material-ui/core';

export const DivPost = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    justify-content: center;
`

export const CardPost = styled(Card)`
    width: 80vw;
    margin-bottom: 1%;
`
export const CardActMe = styled(CardActions)`
    display: flex;
    justify-content: space-between;
    margin-right: 5%;
`
export const DivCount = styled.div`
    display: flex;
    justify-content: flex-start;
`