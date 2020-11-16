import { Request, Response } from "express";
import { deleteByIdBusiness } from "../business/deleteByIdBusiness";


export default async function deleteById(
   req: Request,
   res: Response
) {
   try {

    const input = {
      id: req.params.id,
      token: req.headers.authorization
    }

    await deleteByIdBusiness(input)
    
    res.status(200).send({ message: "Usuário deletado com sucesso!" })

   } catch (error) {
    res.status(400).send({message: error.message}) 
   }
}