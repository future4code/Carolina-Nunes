export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}
 
export class User {
    private id: string
    private name: string
    private email: string
    private password: string
    private role: USER_ROLES

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLES = USER_ROLES.NORMAL
    ){
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.role = role

        if (role.toUpperCase() === USER_ROLES.ADMIN) {
            this.role = USER_ROLES.ADMIN
        } else if (role.toUpperCase() === USER_ROLES.NORMAL) {
            this.role =  USER_ROLES.NORMAL
        } else {
            throw new Error("Envie um User Role válido. Os valores válidos são ADMIN ou NORMAL")
        }
    }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
    public getPassword = (): string => this.password
    public getRole = (): string => this.role

    public setName(newName: string){
        this.name = newName
        return this
    }
  
    public setRole(role:USER_ROLES){
        this.role = role
        return this
    }
}

export interface CreateUserInput {
    name: string
    email: string,
    password: string,
    role: string
}

export type CreateUserOutput = {
    token: string
}
 
export interface CreateUserOutputInterface {
    token: string
}

export function numberToBoolean(value: number): boolean {
    if (value !== 0) {
       return true
    }
    return false;
}
 
export function userRoleToString(role: USER_ROLES): string {
    if (role === "ADMIN") {
       return "admin";
    }
    return "normal";
}