import { Request, Response } from 'express'
import { avgSalary } from '../data/avgSalary'

export const salaryAvg = async (req:Request, res: Response) => {
    try {
        const result = await avgSalary(String(req.params.gender))

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send('Error')
    }
}
