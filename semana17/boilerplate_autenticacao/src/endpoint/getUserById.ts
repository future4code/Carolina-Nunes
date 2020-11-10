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

        const user = await getUserByIdData(authenticationData.id);
        
        res.status(200).send({
            id: user.id,
            email: user.email,
        })

    } catch (error) {
        res.status(400).send({message: error.message})
    }

}