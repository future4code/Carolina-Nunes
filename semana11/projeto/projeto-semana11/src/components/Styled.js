import React from 'react';
import styled from 'styled-components';
import {
    makeStyles,
    createMuiTheme
} from '@material-ui/core';


export const Task = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    margin-bottom: 1%;
    padding: 1%;
`

export const WeekGroup = styled.div`
    background-color: #F2F2F2;
`

export const myTheme = createMuiTheme({
    palette:{
      primary: {
        main:"#A9D941"
      },
      secondary:{
        main:"#6BE5F2"
      }
    }
})

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing(2),
      marginTop: theme.spacing(12),
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(20),
        height: theme.spacing(62),
      },
    },
}));
