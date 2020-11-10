import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { User } from "../types";
import { getUserByEmail } from "../data/getUserByEmail";

export const login = async (
    req: Request, 
    res: Response
) => {
    
    const { email, password } = req.body

    try {
        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "E-mail inválido"})
        }

        const user: User = await getUserByEmail(email)

        if (!user) {
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }

        if (user.password !== password){
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }
        
        const token = generateToken({id: user.id})
        res.status(200).send({
            token,
            message: "Login realizado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}