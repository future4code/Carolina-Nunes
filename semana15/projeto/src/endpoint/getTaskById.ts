import { Request, Response } from "express";
import { getTaskData } from "../data/getTaskData";
import moment from "moment";

export const getTaskById =  async (req: Request, res: Response)=>{
    try{ 

        const task = await getTaskData(req.params.id)

        if(!task){
            res.status(404).send("Tarefa não encontrada")
            return
        }
       res.status(200).send({
            task_id: task.task_id,
            title: task.title,
            description: task.description,
            limit_date: moment(task.limit_date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            creator_user_id: task.creator_user_id,
            status: task.status,
            responsible_user_id: task.responsible_user_id
       });

    }catch(error){
       res.status(400).send(error.message);
    }
};