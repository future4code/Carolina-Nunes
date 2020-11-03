import { Request, Response } from "express"
import { selectUsersByName } from "../data/selecUserByName"
import { User } from "../types/User"

export const getUserByName = async(req: Request,res: Response) =>{
    
    const name: string = String(req.params.name)
    
    try {
       if(!name){
          res.statusCode = 404
          throw new Error("Insira um nome")
       } else {
           const userFound: User[] = await selectUsersByName(name)

           if(!userFound.length) {
                res.statusCode = 404
                throw new Error("Nenhum usuário encontrado com este nome")
           }
           
           res.status(200).send(userFound)
       }
 
       
    } catch (error) {
       res.send(error.message)
    }
}