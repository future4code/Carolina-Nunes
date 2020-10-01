import React from 'react';
import { useHistory } from "react-router-dom";
import PostCard from './PostCard'
import PostForm from './PostForm'
import Loading from '../../components/Loading/Loading'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {
  DivFeed,
  DivForm
} from './Styled'
import { goToPost } from '../../routes/Coordinator';

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const posts = useRequestData([], `/posts`)

  const renderPosts = () => {
    return(
      posts.map((item) => {
        return(
          <PostCard
            key={item.id}
            onClick={() => goToPost(history, item.id)}
            username={item.username}
            title={item.title}
            text={item.text}
          />
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
        {console.log(posts)}
        {posts.length > 0 ? renderPosts() : <Loading/>}
      </DivFeed>
    </div>

  )
}

export default FeedPage