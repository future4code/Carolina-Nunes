import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { User } from "../types";
import { getUserByEmailData } from "../data/getUserByEmailData";
import { compare } from "../services/hashManager";

export const login = async (
    req: Request, 
    res: Response
    ) => {
    
    const { email, password } = req.body

    try {
        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "E-mail inválido"})
        }

        const user: User = await getUserByEmailData(email)

        if (!user) {
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }

        const correctPassword: boolean = await compare(password, user.password)

        if (!correctPassword){
            res.status(404).send({message: "Usuário não encontrado ou senha incorreta"})
        }
        
        const token = generateToken({
            id: user.id,
            role: user.role
        })
        res.status(200).send({
            token: token,
            message: "Login realizado com sucesso!"
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}