import { Request, Response } from 'express'
import { Search2, User } from '../types/User'
import { selectSpecUser } from '../data/selectSpecUser'


export const getSpecificSearch = async (req: Request, res: Response) => {
    const searchData: Search2 = {
        name: String(req.query.name) || '',
        type: String(req.query.type),
        orderBy: String(req.query.orderBy) || 'name',
        orderType: String(req.query.orderType) || 'DESC',
        page: Number(req.query.page) <= 0 ? Number(req.query.page) : 1
    }

    try {
        const foundUsers: User[] = await selectSpecUser(searchData)

        if(!foundUsers.length){
            res.statusCode = 404
            throw new Error("No users found");   
        } else {
            res.status(200).send(foundUsers)
        }
    } catch (error) {
        res.send({
            message: error.message
        })
    }
} 