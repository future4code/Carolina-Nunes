import React from 'react'
import { useHistory, useParams } from "react-router-dom"
import { goToFeed } from '../../routes/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Loading from '../../components/Loading/Loading'
import {
  DivPost,
  CardPost
} from './Styled'
import {
  CardActionArea, 
  CardActions,
  CardContent, 
  Typography,
  Button,
  Divider,
} from '@material-ui/core';

const PostPage = () => {
  useProtectedPage()
  const history = useHistory()
  const {id} = useParams()
  const post = useRequestData([], `/posts/${id}`)
  console.log(post)

  const renderDetail = () => {
    return(
      <div>
        <CardPost variant="outlined">
          <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="h2">
                Postado por: {post.username}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {post.text}
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
            </CardActions>
        </CardPost>
        

      </div>
    )
  }


  return (
    <DivPost>
      {post ? renderDetail() : <Loading/>}
      <Button color="primary" variant="contained" onClick={() => goToFeed(history)} size="large">Voltar</Button>

    </DivPost>

  )
}

export default PostPage