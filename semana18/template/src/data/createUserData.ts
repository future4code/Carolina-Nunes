import { connection } from "./connection";
import { USER_ROLES } from "../model/types";

export const createUserData = async (
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) => {

    try {
        await connection.insert({
            id,
            name,
            email,
            password,
            role
        }).into('User_Arq')

    } catch(error) {
        throw new Error ("Erro de banco de dados: " + error.sqlMessage)
    }
} 