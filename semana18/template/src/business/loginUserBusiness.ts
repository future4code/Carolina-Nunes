import { User } from "../types"
import { loginUserData } from "../data/loginUserData"
import { compare } from "bcryptjs"
import { generateToken } from "../services/authenticator"

export const loginUserBusiness = async (input: any): Promise<string> => {

    try {

        if(!input.email || !input.password){
            throw new Error("Preencha os campos e-mail e/ou senha")
        }

        const userDB = await loginUserData(input.email)

        if(!input.user){
            throw new Error("Usuário não encontrado")
        }

        const correctPassword: boolean = await compare(input.password, userDB.password)

        if(!correctPassword){
            throw new Error("Senha incorreta")
        }

        const token: string = generateToken({
            id: userDB.id,
            role: userDB.role
        })

        return token

    } catch(error) {
        throw new Error("Erro inteligível do banco")
    }
}