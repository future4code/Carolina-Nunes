import { connection } from '../connection'

export const deleteUserData = async (
    id:string
    ): Promise<any> => {
        await connection
            .delete()
            .from('aula50_User')
            .where({ id });
}