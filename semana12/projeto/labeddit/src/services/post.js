import axios from 'axios'
import { baseUrl } from '../constants/urls'
import { goToFeed } from '../routes/Coordinator'

export const addPost = (body, history) => {
    axios.post(`${baseUrl}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((response) => {
            alert("Post criado com sucesso!")
            goToFeed(history)
        })
        .catch((error) => {
            console.log(error)
            alert("Erro ao enviar post, tente novamente.")
        })
}
