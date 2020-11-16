import { connection } from "./connection";

export const getAllUsersData = async () => {

    try {

        const result = await connection.raw(`
            SELECT * FROM User_Arq
        `)
        return result[0]

    } catch(error) {
        throw new Error ("Erro de banco de dados: " + error.sqlMessage)
    }
} 