import { connection } from '../index'

export async function createUserData (
    name: string,
    nickname: string,
    email: string,
): Promise<void> {
    try {
        await connection
        .insert({
            name,
            nickname,
            email
        })
        .into("ToDoListUser")
    } catch (error) {
        throw new Error("Não é possível criar um novo usuário. Tente novamente.")
    }
}