import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { createUserData } from "../data/createUserData";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";

export const createUser = async (
    req: Request, 
    res: Response
    ) => {
    
    const { email, password, role } = req.body

    try {
        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "E-mail inválido"})
        }
        if (!password || password.lenght > 6) {
            res.status(404).send({message: "Senha inválida"})
        }
        const id = generateId()

        const hashPassword: string = await hash(password)

        await createUserData(
            id,
            email,
            hashPassword,
            role
        )
        
        const token = generateToken({id, role})

        res.status(200).send({
            token,
            message: "Usuário criado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}