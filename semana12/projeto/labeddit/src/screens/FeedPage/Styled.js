import styled from "styled-components"
import { Card } from '@material-ui/core'

export const DivFeed = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2%;
    justify-content: center;
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3%;
    justify-content: space-around;
    text-align: center;
`
export const CardPost = styled(Card)`
    width: 80vw;
    margin-bottom: 1%;
`