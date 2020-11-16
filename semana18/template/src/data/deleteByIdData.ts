import { connection } from "./connection";

export const deleteByIdData = async (
    id: string
) => {
    const result = await connection('User_Arq')
        .delete()
        .where({ id })

    return result
} 