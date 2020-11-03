import { Request, Response } from 'express'
import { Search, User } from '../types/User';
import { selectOrderUser } from '../data/selectOrderUser';


export const getSearchUser = async (req:Request, res: Response) => {
    const searchData: Search = {
        name: String(req.query.name).toLowerCase(),
        type: String(req.query.type)
    }

    const validTypes = ['Teacher',  'Operations', 'CX']

    try {
        if(!validTypes.includes(searchData.type)){
            throw new Error("O tipo escolhido não é válido");
        }
        const foundUsers: User[] = await selectOrderUser(searchData)

        if(!foundUsers.length){
            res.statusCode = 404
            throw new Error("No users found for these search params");
        } else {
            res.status(200).send(foundUsers)
        }
    } catch (error) {
        res.send({
            message: error.message
        })
    }
} 