import { connection } from ".."

export default async function selectUserLimitFive():Promise<any> {
    
    try {
        return await connection("aula48_exercicio")
        .select("*")
        .limit(5)
        .offset(10)
    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}