import { Request, Response } from "express";
import generateId from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";
import createUserData from "../data/createUserData";


export default async function createUser(
    req: Request,
    res: Response
) {
    try {

        const {name, nickname, email, password, role} = req.body

        if (
            !name ||
            !nickname ||
            !email ||
            !password
        ) {
            res.status(404).send({message: "Preencha todos os campos"})
        }

        const id: string = generateId()

        const hashPassword = await hash(req.body.password)

        await createUserData(
            id,
            name,
            nickname,
            email,
            hashPassword,
            role
        )

         const token: string = generateToken({
            id,
            role: req.body.role
         })

        res
            .status(200).send({
               message:"Usuário criado!",
               token
            })

    } catch (error) {
        res.status(400).send({message: error.message})
    }
} 