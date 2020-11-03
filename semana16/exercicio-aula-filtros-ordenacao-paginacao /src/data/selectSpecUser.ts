import { connection } from "..";
import { Search2, User } from "../types/User";

export const selectSpecUser = async (data: Search2): Promise<User[]> => {
    try {
        const resultsPerPage: number = 5
        const offset: number = resultsPerPage * (data.page - 1)

        return await connection('aula48_exercicio')
        .where('name',  'like', `%${data.name}%`)  
        .orWhere('type', data.type)
        .orderBy(`${data.orderBy}`, `${data.orderType}`)
        .limit(resultsPerPage)
        .offset(offset)

    } catch (error) {
        throw new Error(error.sqlMessage);
    }
} 