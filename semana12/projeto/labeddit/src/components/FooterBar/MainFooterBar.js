import React from 'react'
import {
    Typography,
} from '@material-ui/core'
import styled from 'styled-components'

const DivFooter = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 2%;
    position: fixed;
    bottom: 0;
    background-color: #455159;
    color: white;
`

const MainFooterBar = () => {

    return(
      <DivFooter>
        <Typography>Projeto LabEddit, por Carolina Della Nina - outubro, 2020</Typography>
      </DivFooter>
    )
  }
  
  export default MainFooterBar