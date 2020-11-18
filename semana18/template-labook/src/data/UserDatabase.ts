import { connection } from "./connection"
import { User } from "../model/User"

class UserDatabase{
    private tableName: string = 'labook_users'

    public getTableName = (): string => this.tableName

    public async signup(
        user: User
    ) {
        try{
            await connection
                .insert({
                    id: user.getId(), 
                    name: user.getName(),
                    email: user.getEmail(),
                    password: user.getPassword(),
                    role: user.getRole()
                }).into(this.tableName)
        } catch(error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage)
        }
    }
}

export default new UserDatabase()