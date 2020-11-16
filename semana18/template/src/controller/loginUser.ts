import { Request, Response } from 'express'
import { loginUserBusiness } from '../business/loginUserBusiness'


export const loginUser = async (
    req:Request,
    res:Response
    ) => {

        
        try {
            
            const input = {
                email: req.body.email, 
                password: req.body.password, 
            } 

            const token = await loginUserBusiness(input)
        
            res.status(200).send({
                token: token,
                message: "Login realizado com sucesso!"
            })
        } catch (error) {
            res.status(400).send({message: error.message})        
        }
}  