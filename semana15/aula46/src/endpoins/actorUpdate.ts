import {Request, Response} from 'express';
import { updateActor } from '../data/updateActor';

export const actorUpdate = async (req: Request, res: Response) => {
    const { id, newSalary } = req.body
    try {
        updateActor(id, newSalary)
        res.status(201).send("Salário editado.")
    } catch (error) {
        console.log(error)
        res.status(400).send("Error")
    }
}