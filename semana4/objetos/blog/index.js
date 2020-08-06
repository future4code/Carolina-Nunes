function addDados() {
    const tituloBlog  = document.getElementById("titulo-post")
    const autorBlog = document.getElementById("autor-post")
    const conteudoBlog = document.getElementById("conteudo-post")
    
    //objeto
    const post = {
        titulo: tituloBlog.value,
        autor: autorBlog.value,
        conteudo: conteudoBlog.value,
    }

    //adiciona array
    const listaDePost = []
    listaDePost.push(post)
    
    //imprime para ver se está funcionando
    // console.log(post)
    // console.log(listaDePost)
   
    //adiciona os posts no html
    const containerDePosts = document.getElementById("container-de-posts")
    containerDePosts.innerHTML += `<p>${tituloBlog.value}</p> <p>${autorBlog.value}</p> <p>${conteudoBlog.value}</p>`
    
    //limpa os campos
    tituloBlog.value = ""
    autorBlog.value = ""
    conteudoBlog.value = ""
}

