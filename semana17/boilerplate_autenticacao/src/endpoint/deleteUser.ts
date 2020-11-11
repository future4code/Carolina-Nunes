import { Request, Response } from 'express'
import { USER_ROLE, AuthenticationData } from '../types'
import { getToken } from '../services/authenticator'
import { getUserByIdData } from '../data/getUserByIdData'
import { deleteUserData } from '../data/deleteUserData'

export const deleteUser = async (
    req:Request, 
    res:Response
    ) => {

        const token: string = req.headers.authorization as string
        const AuthenticationData = getToken(token)

        try {

            if(AuthenticationData.role !== USER_ROLE.ADMIN){
                res.status(404).send({message: "Usuário não autorizado"})
            }

            const id = req.params.id

            const testUser = await getUserByIdData(id)

            if(!testUser){
                res.status(404).send({message: "Usuário não encontrado"})
            }

            await deleteUserData(id)

            res.status(200).send({
                message: "Usuário deletado com sucesso!"
            })
        } catch (error) {
            res.status(400).send(error.message || error.sqlMessage)
        }
}