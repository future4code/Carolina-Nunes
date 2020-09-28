export const goToLogin = (history) => {
    history.push('/login')
}
  
export const goToSignUp = (history) => {
    history.push('/cadastro')
}
  
export const goToFeed = (history) => {
    history.push('/posts')
}
  
export const goToPost = (history, id) => {
    history.push(`/posts/${id}`)
}

export const goToHome = (history) => {
    history.push('/')
}

export const goBack = (history) => {
    history.goBack();
}