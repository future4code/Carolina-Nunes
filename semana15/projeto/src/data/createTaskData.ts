import { connection } from '../index'

export async function createTaskData (
    id: string,
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: string
){
    await connection("TodoListTask")
    .insert({
        id,
        title,
        description,
        limit_date,
        creator_user_id
    })
}