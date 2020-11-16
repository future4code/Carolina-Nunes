import { generateId } from "../services/idGenerator"
import { createUserData } from "../data/createUserData"
import { hash } from "../services/hashManager"
import { generateToken } from "../services/authenticator"

export const createUserBusiness = async (input: any): Promise<string> => {

    try {

        if (
            !input.name ||
            !input.role
        ) {
            throw new Error("Preencha todos os campos")
        }

        if (!input.email || input.email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }

        if (!input.password || input.password.length < 6) {
            throw new Error("Senha inválida")
        }

        const id: string = generateId()

            const hashPassword = await hash(input.password)

            await createUserData(
                id,
                input.name,
                input.email,
                hashPassword,
                input.role
            )

            const token: string = generateToken({
                id,
                role: input.role
            })

            return token
    } catch(error) {
        throw new Error("Erro inteligível do banco")
    }
}