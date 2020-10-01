import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { addPost } from '../../services/post'
import useForm from '../../hooks/useForm'
import {
  TextField,
  Button,
} from '@material-ui/core';


const PostForm = (props) => {
  const history = useHistory()
  const {form, handleInputChange} = useForm({
    text: "",
    title: ""
  })

  const onClickAddPost = (event) => {
    event.preventDefault()
    const element = document.getElementById('addpost_form')
    const isValid = element.checkValidity()
    element.reportValidity()
    if (isValid){
      addPost(form, history)
    }
  }

  return (
    <div>
        <form id={'addpost_form'}> 
            <TextField
              label="Título do post"
              variant="outlined" 
              fullWidth
              required
              id="title" 
              name="title"
              type="text" 
              value={form.title}
              onChange={handleInputChange}
            />
            <TextField
              label="Escreva seu post"
              variant="outlined" 
              fullWidth
              required
              margin="normal"
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
              onClick={onClickAddPost}>
              POSTAR
            </Button>
        </form>
    </div>

  )
}

export default PostForm