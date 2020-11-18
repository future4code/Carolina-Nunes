import { connection } from '..'
import { User } from '../types';

export const getUserProfileData = async (
    id:string
    ):Promise<User[]> => {

        const userProfile:User[] = await connection
        .select('*')
        .from('cookenu_User')
        .where({ id })
   
        return userProfile
}