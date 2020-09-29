import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { goToFeed } from '../../routes/Coordinator'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  DivPost,
} from './Styled'
import {
  Card, 
  CardActionArea, 
  CardContent, 
  Typography,
  Button,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 800,
  },
});

const PostPage = () => {
  const classes = useStyles();
  const history = useHistory()


  return (
    <DivPost>
      <Card variant="outlined" className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2" color="textPrimary" gutterBottom>
              Usuário
            </Typography>
          </CardContent>
          <Divider variant="middle"/>
          <CardContent>
            <Typography variant="body2" component="p">
              Post
            </Typography>
          </CardContent>
          <CardActionArea>
          <Divider variant="middle"/>
          <ArrowUpwardIcon
            // onClick={this.onClickCurtida}
            // valorContador={this.state.numeroCurtidas}
          />
          <ArrowDownwardIcon
            // onClickIcone={this.onClickComentario}
            // valorContador={this.state.numeroComentarios}
          />
          </CardActionArea>
      </Card>
      <Typography>Comentários</Typography>
      <Divider variant="middle" />
      <br></br>
      <Button color="primary" variant="contained" onClick={() => goToFeed(history)} size="large">Voltar</Button>

    </DivPost>

  )
}

export default PostPage