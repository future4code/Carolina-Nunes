import { connection } from '../index'

export async function getTaskData (
    id: string,
): Promise<any>{
    const result = await connection.raw(`
        SELECT tasks.*, nickname FROM TodoListTask AS tasks
        JOIN TodoListUsers AS users
        ON creator_user_id = users.id
        WHERE tasks.id = '${id}' 
    `)
    
    return result[0][0]
}