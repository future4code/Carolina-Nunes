import { Request, Response } from "express";
import { generateId } from "../services/generateId";
import { createUserData } from "../data/createUserData";

export const createUser = async (
    req: Request, 
    res: Response
) => {
    
    const { email, password } = req.body

    try {
        if (!email || !password) {
            res.status(404).send({message: "Preencha todos os campos"})
        }
        const id: string = generateId()

        await createUserData(
            id,
            email,
            password
        )
        res.status(200).send({message: "Usuário criado com sucesso!"})

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}