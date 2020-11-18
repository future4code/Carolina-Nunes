import { deleteByIdData } from "../data/deleteByIdData";
import { getTokenData } from "../services/authenticator";

export const deleteByIdBusiness = (input: {
    id: string,
    token: any
}): Promise<any> => {

    try{
        const delUser = deleteByIdData(input.id)
 
        const authenticationData = getTokenData(input.token);
 
        if (authenticationData.role !== 'ADMIN') {
          throw new Error("Acesso não autorizado!");
        }
 
        return delUser


    } catch {
        throw new Error("Erro inteligível do banco")
    }

}

export const deleteUserBusiness = (input: { id: string, token: any }): Promise<any> => {
    {
       const deletedUser = deletedtUser(input.id)
 
       const authenticationData = getTokenData(input.token);
 
       if (authenticationData.role !== 'ADMIN') {
          throw new Error("Acesso não autorizado a usuários não ADMIN!");
       }
 
       if (!authenticationData) {
          throw new Error("Token informado está incorreto!");
       }
 
       return deletedUser
    };
 }