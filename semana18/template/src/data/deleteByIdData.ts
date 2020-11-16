import { connection } from "./connection";

export const deleteByIdData = async (
    id: string
) => {

    try{

        const result = await connection
            .delete()
            .from('User_Arq')
            .where({ id })
    
        return result
    } catch(error) {
        throw new Error ("Erro de banco de dados: " + error.sqlMessage)
    }
} 