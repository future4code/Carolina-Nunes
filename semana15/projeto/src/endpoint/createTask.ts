import { Request, Response } from "express";
import { createTaskData } from "../data/createTaskData";
import moment, { unix } from 'moment'


export const createTask =  async (req: Request, res: Response)=>{
    try{
        if (
            !req.body.title || 
            !req.body.description ||
            !req.body.limit_date ||
            !req.body.creator_user_id
        ) {
            res.status(400).send("Dados obrigatórios")
            return
        }
        
        const dateDif: number = moment(req.body.limit_date, 'DD/MM/YYYY').unix() - moment().unix()

        if (dateDif <= 0){
            res.status(400).send("Data limite deve ser futura")
            return
        }

        const id = Date.now() + Math.random().toString()

        await createTaskData(
            id, 
            req.body.title, 
            req.body.description, 
            moment(req.body.limit_date, 'DD/MM/YYYY').format("YYYY-MM-DD"),
            req.body.creator_user_id
        )

        res.status(200).send({
            message:"Tarefa criada com sucesso!",
            id
        });

    }catch(error){

       res.send(error.message);
    }
};

