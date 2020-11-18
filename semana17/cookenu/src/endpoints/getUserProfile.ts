import { Request, Response } from 'express'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { User } from '../types'
import { getUserProfileData } from '../data/getUserProfileData'


export const getUserProfile = async (
    req:Request, 
    res:Response
    ) => {

    try {
        const token:string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.status(404).send({message: "Não autorizado"})
        }

        const dataUser: User[] = await getUserProfileData(tokenData.id) 
        if(!dataUser){
            res.status(404).send({message: "Usuário não encontrado"})
        }

        res.send({
            id: dataUser[0].id,
            name: dataUser[0].name,
            email: dataUser[0].email,
        })

    } catch (error) {
        if(error.message === `jwt malformed`){
            error.message = 'Token inválido'
        }
        res.status(400).send({
            res.status(400).send({message: error.message})
        })
    }
}