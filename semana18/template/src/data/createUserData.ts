import { connection } from "../index";
import { USER_ROLES } from "../types";

export const createUserData = async (
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) => {
    await connection.insert({
        id,
        name,
        email,
        password,
        role
    }).into('User_Arq')
} 