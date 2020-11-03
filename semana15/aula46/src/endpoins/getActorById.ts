import {Request, Response} from 'express';
import { selectActorById } from '../data/selectActorById';


export const getActorById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const actor = await selectActorById(id);
    
        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({
          message: error.message,
        });
    }
}
