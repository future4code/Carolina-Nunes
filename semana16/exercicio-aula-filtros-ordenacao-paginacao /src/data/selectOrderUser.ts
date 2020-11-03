import  { connection } from '..'
import { Search, User } from '../types/User';

export const selectOrderUser = async (data: Search): Promise<User[]> => {
    try {
        return await connection('aula48_exercicio')
        .select('*')
        .where('name',  'like', `%${data.name}%`)  
        .andWhere('type', data.type)  
    } catch (error) {
        throw new Error(error.sqlMessage);
    }
} 