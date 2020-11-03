import {Request, Response} from 'express';
import { countActorsByGender } from '../data/countByGender';


export const getGender = async (req: Request, res: Response) => {
    try {
        const genderCount: any = await countActorsByGender(req.params.gender)

        if (!genderCount){
            res.statusCode = 404
            throw new Error("Nenhum ator com este gênero")
        }

        res.status(200).send(genderCount)

    } catch (error) {
      res.send(error.message)
    }
}
