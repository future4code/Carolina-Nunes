import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../constants/urls'

const useRequestDataPost = (initialData, endpoint) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(`${baseUrl}${endpoint}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((response) => {
        setData(response.data.post)
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        alert('Ocorreu um erro, tente novamente')
      })
  }, [endpoint])

  return (data)
}

export default useRequestDataPost