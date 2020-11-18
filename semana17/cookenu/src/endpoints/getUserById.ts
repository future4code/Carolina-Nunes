import { Request, Response } from "express";
import { getTokenData, AuthenticationData } from "../services/authenticator";
import { getUserByIdData } from "../data/getUserByIdData";
import { User } from "../types";


export const getUserById = async (
    req: Request, 
    res: Response
) => {
    
    try {

        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.status(404).send({message: "Não autorizado"})
        }

        const user: User[] = await getUserByIdData(id);

        if(!user){
            res.status(404).send({message: "Usuário não encontrado"})
        }
        
        res.send({
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
        })

    } catch (error) {

        if(error.message === `Cannot read property 'id' of undefined`){
            error.message = 'O id precisa ser fornecido'
        }
        if(error.message === `jwt malformed`){
            error.message = 'Token inválido'
        }
        res.status(400).send({message: error.message})
    }

}