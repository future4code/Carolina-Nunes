import { getTokenData } from "../services/authenticator";
import { getAllUsersData } from "../data/getAllUsersData";

export const getAllUsersBusiness = async (input: any) => {

    try{

        const authenticationData = getTokenData(input.token);

        const users =  await getAllUsersData()

        if (!input.token) {
            throw new Error("Não autorizado");
        }

        if (!authenticationData) {
            throw new Error("Não autorizado");
        }

        return users

    } catch(error){
        throw new Error("Erro inteligível do banco")
    }

}

