import React from 'react';
import { useHistory } from "react-router-dom";
import { goToPost } from '../../routes/Coordinator'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { CardPost } from './Styled'
import {
  CardActionArea, 
  CardContent, 
  CardActions,
  Typography,
  Button,
  Divider,
} from '@material-ui/core';

const PostCard = (props) => {
    const history = useHistory()
    
    return(
        <div>
            <CardPost variant="outlined" onClick={props.onClick}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" component="h2">
                            Postado por: {props.username}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Divider variant="middle"/>
                <CardActions>
                    <ArrowUpwardIcon
                        // onClick={this.onClickCurtida}
                        // valorContador={this.state.numeroCurtidas}
                    />
                    <ArrowDownwardIcon
                        // onClickIcone={this.onClickComentario}
                        // valorContador={this.state.numeroComentarios}
                    />
                    <Button onClick={() => goToPost(history)} size="small" color="primary">
                      Veja mais
                    </Button>
                </CardActions>
            </CardPost>
        </div>
    )
}
export default PostCard