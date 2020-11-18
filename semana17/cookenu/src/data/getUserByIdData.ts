import { User } from '../types'
import { connection } from '..';

export const getUserByIdData = async(
    id: string
    ): Promise<User> => {

    const user: User[] = await connection
      .select("*")
      .from("cookenu_User")
      .where({ id });
 
    return user[0];
}