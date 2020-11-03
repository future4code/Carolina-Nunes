import { connection } from '../index'

export async function createUserData (
    id: string,
    name: string,
    nickname: string,
    email: string,
){
    await connection
    .insert({
        id,
        name,
        nickname,
        email
    })
    .into("TodoListUser")
}