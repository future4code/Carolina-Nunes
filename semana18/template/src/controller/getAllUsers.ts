import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { getAllUsersData } from "../data/getAllUsersData";


export default async function getAllUsers(
   req: Request,
   res: Response
) {
   try {

    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const user = await getAllUsersData()

    if (!token) {
      res.status(404).send({message: "Não autorizado"})
    }

    if (!authenticationData) {
      res.status(404).send({message: "Não autorizado"})
    }

    res.status(200).send(user)

   } catch (error) {
        res.status(400).send({message: error.message})
   }
} 