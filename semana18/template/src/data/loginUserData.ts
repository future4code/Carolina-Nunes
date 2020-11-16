import { connection } from "./connection";

export const loginUserData = async (
    email:string
    ) => {

        const userProfile = await connection
        .select('*')
        .from('User_Arq')
        .where({ email })
        return {
            id: userProfile[0].id,
            name: userProfile[0].name,
            email: userProfile[0].email,
            password: userProfile[0].password,
        }
} 