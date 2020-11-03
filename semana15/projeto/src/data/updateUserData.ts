import { connection } from '../index'

export async function updateUserData (
    id: string,
    name?: string,
    nickname?: string,
    email?: string
){
   if(name){
       await connection.raw(`
            UPDATE TodoListUser
            SET name = '${name}'
            WHERE id = '${id}'
       `)
   }

   if(nickname){
        await connection.raw(`
            UPDATE TodoListUser
            SET nickname = '${nickname}'
            WHERE id = '${id}'
        `)
    }
    
    if(email){
        await connection.raw(`
            UPDATE TodoListUser
            SET email = '${email}'
            WHERE id = '${id}'
        `)
    }
}