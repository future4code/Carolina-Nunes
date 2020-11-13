import { connection } from "../index";

export default async function createUserData(
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string,
    role: string
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password,
        role
    }).into('cookenu_User')
} 