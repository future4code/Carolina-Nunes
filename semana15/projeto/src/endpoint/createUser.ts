import { Request, Response } from "express";
import { createUserData } from "../data/createUserData";

export const createUser =  async (req: Request, res: Response)=>{
    try{

        const {name, nickname, email} = req.body

        if (!(name && nickname && email)) {
            throw new Error("Preencha todos os campos!")
        }
        const users = await createUserData(name, nickname, email)

        res.status(200).send({chaveDoRetorno: "Usuário criado com sucesso!"});
    }catch(error){

       res.send(error.message);
    }
};

