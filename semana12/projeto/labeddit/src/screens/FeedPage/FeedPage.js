import React from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { baseUrl } from '../../constants/urls'
import PostForm from './PostForm'
import Loading from '../../components/Loading/Loading'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {
  DivFeed,
  DivForm,
  CardPost, 
  CardActMe,
  DivCount,
} from './Styled'
import {
  CardActionArea, 
  CardContent, 
  Typography,
  Button,
  Divider,
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { goToPost } from '../../routes/Coordinator';

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `/posts`)

  
  const vote = (vote, id) => {
    const body = {
        direction: vote
    }
    axios
    .put(`${baseUrl}/posts/${id}/vote`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
    .then((response) => {
      console.log()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const renderPosts = () => {
    return(
      posts.map((item) => {
        return(
          <div key={item.id}>
            <CardPost variant="outlined">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="h2">
                    Postado por: {item.username}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {item.text}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Divider variant="middle"/>
              <CardActMe>
                <DivCount>
                <Button onClick={() => vote(+1, item.id)}>
                  <ArrowUpwardIcon/>
                </Button>               
                <Typography>{item.votesCount}</Typography>
                <Button onClick={() => vote(-1, item.id)}>
                  <ArrowDownwardIcon/>
                </Button>
                </DivCount>
                <Button onClick={() => goToPost(history, item.id)} size="small" color="primary">
                  Veja mais
                </Button>
                <Typography>
                  <ModeCommentIcon/>
                  {item.commentsCount}
                </Typography>
              </CardActMe>
            </CardPost>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <DivForm>
        <PostForm />
      </DivForm>
      <DivFeed>
        {posts.length > 0 ? renderPosts() : <Loading/>}
      </DivFeed>
    </div>

  )
}

export default FeedPage