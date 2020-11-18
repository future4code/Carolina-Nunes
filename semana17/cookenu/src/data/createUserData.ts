import { connection } from "../index";

export default async function createUserData(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
) {
    await connection.insert({
        id,
        name,
        email,
        password,
        role
    }).into('cookenu_User')
} 