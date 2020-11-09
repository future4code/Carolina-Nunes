import { Request, Response } from "express"
import { User } from "../types/User"
import { selectUsersByType } from "../data/selectUserByType"

export const getUserByType = async(req: Request,res: Response) =>{
    
    const type: string = String(req.params.type)
    
    try {
       if(!type){
          res.statusCode = 404
          throw new Error("Insira um tipo")
       } else {
           const userFound: User[] = await selectUsersByType(type)

           if(!userFound.length) {
                res.statusCode = 404
                throw new Error("Nenhum usuário encontrado")
           }
           
           res.status(200).send(userFound)
       }
 
       
    } catch (error) {
       res.send(error.message)
    }
}