import { Request, Response } from "express";
import { getAllUsersBusiness } from "../business/getAllUsersBusiness";


export default async function getAllUsers(
   req: Request,
   res: Response
) {
   try {

      const token = req.headers.authorization
      const user = await getAllUsersBusiness(token)
    

    res.status(200).send(user)

   } catch (error) {
        res.status(400).send({message: error.message})
   }
} 