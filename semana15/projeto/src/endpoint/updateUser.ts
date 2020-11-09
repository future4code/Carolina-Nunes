import { Request, Response } from "express";
import { updateUserData } from "../data/updateUserData";

export const updateUser =  async (req: Request, res: Response)=>{
    try{ 
        if(
            req.body.name === "" ||
            req.body.nickname === "" ||
            req.body.email === ""
        ){
            res.status(400).send("Nenhum dos campos deve estar em branco.")

            return
        }

        if (!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send("Selecione ao menos um valor para alterar.")

            return
        }
        
        await updateUserData(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )
        res.status(200).send("Usuário atualizado com sucesso");

    }catch(error){
       res.send(error.message);
    }
};