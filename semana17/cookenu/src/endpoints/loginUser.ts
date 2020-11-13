import { Request, Response } from 'express'
import { User } from '../types'
import { loginUserData } from '../data/loginUserData'
import { compare } from '../services/hashManager'
import { generateToken } from '../services/authenticator'


export const loginUser = async (
    req:Request,
    res:Response
    ) => {

    const { email, password, role } = req.body

    try {
        if(!email || !password){
            res.status(404).send({message: "Preencha os campos e-mail e/ou senha"})
        }

        const user: User | undefined = await loginUserData(email)

        if(!user){
            res.status(404).send({message: "Usuário não encontrado"})
        }

        const correctPassword: boolean = await compare(password, user.password)

        if(!correctPassword){
            res.status(404).send({message: "Senha incorreta"})
        }

        const token:string = generateToken({
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