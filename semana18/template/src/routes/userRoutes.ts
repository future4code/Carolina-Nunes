import express from 'express'
import { createUser } from '../controller/createUser'
import { loginUser } from '../controller/loginUser'
import getAllUsers from '../controller/getAllUsers'
import deleteById from '../controller/deleteById'

export const userRouter = express.Router()


userRouter.put('/signup', createUser)
userRouter.post('/login', loginUser)
userRouter.get('/all', getAllUsers)
userRouter.delete('/:id', deleteById)

