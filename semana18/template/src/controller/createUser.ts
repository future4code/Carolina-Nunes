import { Request, Response } from "express";
import { generateId } from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { createUserData } from "../data/createUserData";
import { generateToken } from "../services/authenticator";


export const createUser = async (
    req: Request,
    res: Response
) => {
    try {

        const {name, email, password, role} = req.body

        if (
            !name ||
            !role
        ) {
            res.status(404).send({message: "Preencha todos os campos"})
        }

        if (!email || email.indexOf("@") === -1) {
            res.status(404).send({message: "Email inválido"})
        }

        if (!password || password.length < 6) {
            res.status(404).send({message: "Senha inválida"})
        }

        const id: string = generateId()

        const hashPassword = await hash(req.body.password)

        await createUserData(
            id,
            name,
            email,
            hashPassword,
            role
        )

        const token: string = generateToken({
            id,
            role: req.body.role
        })

        res.status(200).send({
            message:"Usuário criado!",
            token
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }
} 