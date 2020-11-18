import hashManager from "../services/hashManager";
import idGenerator from "../services/idGenerator";
import { User, CreateUserOutput, CreateUserInput } from "../model/User";
import authenticator from "../services/authenticator";
import userDatabase from "../data/UserDatabase"

class UserBusiness {

    public async signup(
        input: CreateUserInput
        ): Promise<string> {
            
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

                const id: string = idGenerator.generateId()

                const cypherPassword = await hashManager.hash(input.password);

                const newUser: User = new User(
                    id,
                    input.name,
                    input.email,
                    cypherPassword,
                    input.role
                )
        
                await userDatabase.signup(newUser)
        
                let output: CreateUserOutput;
        
                const token = authenticator.generateToken({
                    id,
                    role: newUser.getRole()
                });
        
                return token;
        

            } catch(error) {
                if (error.sqlMessage.includes("Duplicate entry")) {
                    throw new Error("Este usuário já existe!");
                 }
                 throw new Error(error.sqlMessage || error.message);
            }
        }
}

export default new UserBusiness()