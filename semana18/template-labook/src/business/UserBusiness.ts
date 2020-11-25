import { HashManager } from "../services/HashManager";
import { User, LoginInput, FriendInput } from "../model/User";
import { UserDatabase } from "../data/UserDatabase"
import { IdGenerator } from "../services/IdGenerator";


export class UserBusiness {

    public async signup(
        name: string,
        email: string,
        password: string,
        ): Promise<string> {
            
        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const userDatabase = new UserDatabase()
        await userDatabase.signup(id, name, email, password)

        return id
    }

    public async getUserByEmail(
        input: LoginInput
        ){
        
        const userDatabase = new UserDatabase()
        const user: User = await userDatabase.getUserByEmail(input.email)

        const hashManager = new HashManager()
        const hashCompare = await hashManager.compare(input.password, user.getPassword())

        if(!hashCompare){
            throw new Error("Senha inválida")
        }

        return user

    }
                
    public async addFriend(input: FriendInput){

        const userDatabase = new UserDatabase();
        const friend = await userDatabase.checkFriendship(input.authorId, input.targetId);
        if(!friend){
            await userDatabase.addFriend(input.authorId, input.targetId);
        }else{
            throw new Error("Vocês já são amigos")
        }
    }

    public async unfriend(input: FriendInput){

        const userDatabase = new UserDatabase();
        const friend = await userDatabase.checkFriendship(input.authorId, input.targetId);
        if(friend){
            await userDatabase.unfriend(input.authorId, input.targetId);
        }else{
            throw new Error("Vocês não são amigos");
        }
    }
}
