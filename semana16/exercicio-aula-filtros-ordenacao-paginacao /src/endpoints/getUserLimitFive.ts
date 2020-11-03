import { Request, Response } from 'express'
import selectUserLimitFive from '../data/selectUserLImitFive'


export const getUserLimitFive = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectUserLimitFive()

       if(!users.length){
          res.statusCode = 404
          throw new Error("Nenhum usuário encontrado")
       }

       res.status(200).send(users)

    } catch (error) {
       console.log(error)
       res.send(error.message)
    }
} 