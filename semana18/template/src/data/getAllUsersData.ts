import { connection } from "./connection";

export const getAllUsersData = async () => {
    const result = await connection.raw(`
        SELECT * FROM User_Arq
    `)
    return result[0]
} 