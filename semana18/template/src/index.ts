import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createUser } from './controller/createUser'
import { loginUser } from './controller/loginUser'
import getAllUsers from './controller/getAllUsers'
import deleteById from './controller/deleteById'


dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.put('/signup', createUser)
app.post('/login', loginUser)
app.get('/all', getAllUsers)
app.delete('/:id', deleteById)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})
