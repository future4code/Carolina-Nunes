import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import HomePage from '../screens/HomePage/HomePage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PostPage from '../screens/PostPage/PostPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'


const Router = () => {
  return(
      <Switch>
        <Route exact path={'/login'}>
          <LoginPage/>
        </Route>
        <Route exact path={'/cadastro'}>
          <SignUpPage/>
        </Route>
        <Route exact path={'/posts'}>
          <FeedPage/>
        </Route>
        <Route exact path={'/posts/:id'}>
          <PostPage/>
        </Route>
        <Route exact path={'/'}>
          <HomePage/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
  )
}

export default Router