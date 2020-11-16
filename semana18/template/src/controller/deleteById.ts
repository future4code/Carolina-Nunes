import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { deleteByIdData } from "../data/deleteByIdData";


export default async function deleteById(
   req: Request,
   res: Response
) {
   try {

    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const user = await deleteByIdData(req.params.id)

    if (authenticationData.role !== 'ADMIN') {
      res.status(404).send({message: "Ação não autorizada"})
    }
    if (!authenticationData) {
      res.status(404).send({message: "Não autorizado"})
    }
    if (!user) {
      res.status(404).send({message: "Usuário não encontrado"})
    }

    res.status(200).send({ message: "Usuário deletado com sucesso!" })

   } catch (error) {
    res.status(400).send({message: error.message}) 
   }
}