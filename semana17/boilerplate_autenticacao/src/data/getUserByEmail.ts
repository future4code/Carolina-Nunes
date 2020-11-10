import { User } from '../types'
import { connection } from "../connection";


export const getUserByEmail = async(
    email: string
    ): Promise<User> => {

    const result = await connection
      .select("*")
      .from("aula50_User")
      .where({ email });
 
    return result[0];
}
