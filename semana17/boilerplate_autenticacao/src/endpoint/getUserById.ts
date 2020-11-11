import { Request, Response } from "express";
import { getUserByIdData } from "../data/getUserByIdData";
import { getToken } from "../services/authenticator";



export const getUserById = async (
    req: Request, 
    res: Response
) => {
    
    try {

        const token = req.headers.authorization as string;

        const authenticationData = getToken(token);

        if (authenticationData.role !== "NORMAL") {
            throw new Error("Somente o usuário normal pode ter acesso à essa funcionalidade");
          }

        const user = await getUserByIdData(authenticationData.id);
        
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: authenticationData.role
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}