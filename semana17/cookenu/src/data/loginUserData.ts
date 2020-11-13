import { connection } from '..'
import { User } from '../types'

export const loginUserData = async (
    email:string
    ): Promise<User> => {

        const userProfile = await connection
        .select('*')
        .from('cookenu_User')
        .where({ email })
        return {
            id: userProfile[0].id,
            name: userProfile[0].name,
            email: userProfile[0].email,
            password: userProfile[0].password,
        }
}