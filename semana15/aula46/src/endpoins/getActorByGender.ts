import {Request, Response} from 'express';
import { selectActorByGender } from '../data/selectActorByGender';

export const getActorByGender = async (req: Request, res: Response) => {
    try {
        const count = await selectActorByGender(req.query.gender as string);
        res.status(200).send({
          quantity: count,
        });
    } catch (err) {
        res.status(400).send({
          message: err.message,
        });
    }
}