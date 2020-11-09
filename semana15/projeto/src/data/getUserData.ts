import { connection } from '../index'

export async function getUserData (
    id: string,
){
    const result = await connection("TodoListUser")
    .select('*')
    .where( { id } )
    
    return result[0]
}