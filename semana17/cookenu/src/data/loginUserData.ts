import { connection } from '..'
import { User } from '../types'

export const loginUserData = async (
    email:string
    ): Promise<User> => {

        const userProfile = await connection
        .select('*')
        .from('cookenu_User')
        .where({ email })
        
        return userProfile[0]
}