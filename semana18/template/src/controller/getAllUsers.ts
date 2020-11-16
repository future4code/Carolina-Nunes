import { Request, Response } from "express";
import { getAllUsersBusiness } from "../business/getAllUsersBusiness";


export default async function getAllUsers(
   req: Request,
   res: Response
) {
   try {
    const input = {
      id: req.params.id,
      token: req.headers.authorization
    }

    const user = await getAllUsersBusiness(input)
    

    res.status(200).send(user)

   } catch (error) {
        res.status(400).send({message: error.message})
   }
} 