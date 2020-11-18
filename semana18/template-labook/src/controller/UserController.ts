import { Request, Response } from "express"
import userBusiness from "../business/UserBusiness"
import userDatabase from "../data/UserDatabase"
import { CreateUserInput } from "../model/User"

class UserController {

    public async signup(
        req: Request,
        res: Response
    ) {
        try {

            const input: CreateUserInput = {
                name: req.body.name, 
                email: req.body.email, 
                password: req.body.password, 
                role: req.body.role
            }

            const token = await userBusiness.signup(input)

            res.status(200).send({
                message:"Usuário criado!",
                token
            })

        } catch(error) {
            res.statusCode = 400

            if (error.message === "Usuário já existe") res.statusCode = 409

            res.send({
                message: error.message || error.sqlMessage
            })
        }
    }



}
export default new UserController()