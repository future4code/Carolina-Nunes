import React, { useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../../constants/urls'
import Loading from '../../components/Loading/Loading'
import { useHistory, useParams } from "react-router-dom"
import useForm from '../../hooks/useForm'
import { goToFeed } from '../../routes/Coordinator'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestDataPost from '../../hooks/useRequestDataPost'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import {
  DivPost,
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
  TextField,
} from '@material-ui/core';

const PostPage = () => {
  useProtectedPage()
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false)
  const {id} = useParams()
  const post = useRequestDataPost({}, `/posts/${id}`)
  const {form, handleInputChange} = useForm({
    text: "",
  })
  
  const addComment = (body, history) => {
    axios.post(`${baseUrl}/posts/${id}/comment`, body, {
      headers: {
          Authorization: localStorage.getItem("token")
      }
    })
    .then((response) => {
        alert("Comentário criado com sucesso!")
        goToFeed(history)
    })
    .catch((error) => {
        console.log(error)
        alert("Erro ao enviar post, tente novamente.")
    })
  }

  const onClickAddComment = (event) => {
    event.preventDefault()
    const element = document.getElementById('addcomment_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid){
      addComment(form, history, setIsLoading)
    }

    const comment = (comment, id) => {
      const body = {
          direction: comment
      }
      axios
      .put(`${baseUrl}/posts/${id}/comment/${id}/vote`, body, {
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
  }

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
            <CardActMe>
              <DivCount>
                <Button>
                  <ArrowUpwardIcon/>
                </Button>
                <Typography>{post.votesCount}</Typography>
                <Button>
                  <ArrowDownwardIcon/>
                </Button>
              </DivCount>
              <Typography>
                  <ModeCommentIcon />
                  {post.commentsCount}
              </Typography>
            </CardActMe>
          </CardPost>
          <form id={'addcomment_form'}>
            <TextField
              label="Comentário"
              variant="outlined" 
              fullWidth
              margin="normal"
              required
              id="text" 
              name="text"
              type="text" 
              value={form.text}
              onChange={handleInputChange}
            />
            <Button 
              size="large"
              color="primary"
              variant="contained"
              style={{ width: 200 }}
              onClick={onClickAddComment}>
              COMENTAR
            </Button>
          </form>
      </div>
    )
  }


  return (
    <DivPost>
      {post ? renderDetail() : <Loading/>}

      {}

      <Button color="primary" variant="contained" onClick={() => goToFeed(history)} size="large">Voltar</Button>

    </DivPost>

  )
}

export default PostPage