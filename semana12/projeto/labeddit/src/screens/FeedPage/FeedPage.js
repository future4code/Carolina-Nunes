import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { goToFeed, goToPost } from '../../routes/Coordinator'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {
  DivFeed,
  DivForm
} from './Styled'
import {
  Card, 
  CardActionArea, 
  TextField,
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

const FeedPage = () => {
  const classes = useStyles();
  const history = useHistory()


  return (
    <div>
      <DivForm>
        <form>
          <TextField
            label="Escreva seu post"
            variant="outlined" 
            style={{ width: 400 }} 
            id="name" 
            name="name"
            type="text" 
            // value={form.name}
            // onChange={handleInputChange}
            inputProps={{
                pattern: "[A-Za-z ]{5,}", 
                required: true,
                title: "Insira, no minimo, 5 letras"
            }}
          />
          <br></br>
          <br></br>
          <Button 
            size="large"
            color="primary"
            variant="contained"
            style={{ width: 200 }}
            onClick={() => goToFeed(history)}>
              POSTAR
          </Button>
        </form>
      </DivForm>
      <DivFeed>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h4" color="textPrimary" gutterBottom>
              Usuário
            </Typography>
          </CardContent>
          <Divider variant="middle"/>
          <CardContent>
            <Typography variant="body2" component="p">
              Post
            </Typography>
          </CardContent>
          <CardActionArea className={classes.pos}>
          <Divider variant="middle"/>
          <ArrowUpwardIcon
            // onClick={this.onClickCurtida}
            // valorContador={this.state.numeroCurtidas}
          />
          <ArrowDownwardIcon
            // onClickIcone={this.onClickComentario}
            // valorContador={this.state.numeroComentarios}
          />
          <Button onClick={() => goToPost(history)} size="small">Veja Mais</Button>
          </CardActionArea>
        </Card>
      </DivFeed>
    </div>

  )
}

export default FeedPage