import {Request, Response} from 'express';
import { selectActorByName } from '../data/selectActorByName'
import { Actor } from '../types';

export const getActorByName = async (req: Request, res: Response) => {
    try {
        const actors: Actor[] = await selectActorByName(req.params.name)

        if (actors.length === 0){
            res.statusCode = 404
            throw new Error()
        }

        res.status(200).send(actors)

    } catch (error) {
      res.send(error.message)
    }
}