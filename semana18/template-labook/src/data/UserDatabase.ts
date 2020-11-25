import { DataBase } from "./connection"
import { User } from "../model/User"

export class UserDatabase extends DataBase{

    private static tableName = 'labook_users'
    private static friendTableName = 'labook_friend'

    public async signup(
        id: string,
        name: string,
        email: string,
        password: string,
        ){

        try{
            await super.getConnection()
                .insert({
                    id,
                    name,
                    email,
                    password,
                }).into(UserDatabase.tableName)

        } catch(error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage || error.message)
        }
    }

    public async getUserByEmail(
        email: string
        ): Promise<User> {

            try {

                const result = await this.getConnection()
                    .select("*")
                    .from(UserDatabase.tableName)
                    .where({ email })
                
                return User.toUserModel(result[0])

            } catch(error) {
                throw new Error("Erro de banco de dados: " + error.sqlMessage || error.message)
            }
    }

    public async addFriend(
        authorId: string, 
        targetId: string
        ): Promise<void> {

        try {
            await this.getConnection().raw(`
            INSERT INTO ${UserDatabase.friendTableName}
            VALUES
            ("${authorId}", "${targetId}"),
            ("${targetId}", "${authorId}")
            `);

        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage || error.message);
        }
    }

    public async unfriend(
        authorId: string, 
        targetId: string
        ): Promise<void> {

        try {
            await this.getConnection().raw(`
            DELETE FROM ${UserDatabase.friendTableName}
            WHERE
            (id_requester = "${authorId}" AND id_responder = "${targetId}")
            OR
            (id_requester = "${targetId}" AND id_responder = "${authorId}");
            `);

        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage || error.message);
        }
    }

    public async checkFriendship(
        authorId: string, 
        targetId: string
        ): Promise<boolean>{
        
            try {
                
                const result = await this.getConnection().raw(`
                    SELECT * FROM ${UserDatabase.friendTableName}
                    WHERE
                    (id_requester = "${authorId}" AND id_responder = "${targetId}")
                    OR
                    (id_requester = "${targetId}" AND id_responder = "${authorId}");
                    `);

                if(result[0][0]){
                    return true;
                }

                return false;

        } catch (error) {
            throw new Error("Erro de banco de dados: " + error.sqlMessage || error.message);
        }   
    }
}
