
export class User {

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        ){

        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password


    public setId(id: string){
        this.id = id
        return this
    }

    public setName(name: string){
        this.name = name
        return this
    }

    public setEmail(email: string){
        this.email = name
        return this
    }

    public setPassword(password: string){
        this.password = password
        return this
    }

    public static toUserModel(object: any): User{
        return new User(object.id, object.name, object.email, object.password);
    }

}

export interface CreateUserInput {
    name: string
    email: string,
    password: string,
}

export interface LoginInput{
    email: string,
    password: string
}

export interface FriendInput{
    authorId: string,
    targetId: string
}
