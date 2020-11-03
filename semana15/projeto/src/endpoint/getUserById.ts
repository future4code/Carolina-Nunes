import { Request, Response } from "express";
import { getUserData } from "../data/getUserData";

export const getUserById =  async (req: Request, res: Response)=>{
    try{ 

        const user = await getUserData(req.params.id)

        if(!user){
            res.status(404).send("Usuário não encontrado")
            return
        }
       res.status(200).send({
           id: user.id,
           nickname: user.nickname
       });

    }catch(error){
       res.send(error.message);
    }
};