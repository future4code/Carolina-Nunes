import { Request, Response } from "express";
import { createUserData } from "../data/createUserData";

export const createUser =  async (req: Request, res: Response)=>{
    try{
        if (
            !req.body.name || 
            !req.body.nickname ||
            !req.body.email
        ) {
            res.status(400).send("Preencha todos os campos.")
            return
        }
        
        const id = Date.now() + Math.random().toString()
        await createUserData(
            id, 
            req.body.name, 
            req.body.nickname, 
            req.body.email
        )

        res.status(200).send("Usuário criado com sucesso!");
    }catch(error){

       res.send(error.message);
    }
};

