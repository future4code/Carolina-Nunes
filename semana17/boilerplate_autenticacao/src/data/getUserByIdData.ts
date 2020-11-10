import { User } from '../types'
import { connection } from "../connection";


export const getUserByIdData = async(
    id: string
    ): Promise<User> => {

    const result = await connection
      .select("*")
      .from("aula50_User")
      .where({ id });
 
    return result[0];
}