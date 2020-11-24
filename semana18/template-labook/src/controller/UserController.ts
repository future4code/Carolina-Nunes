import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { CreateUserInput, LoginInput, FriendInput } from "../model/User"
import { HashManager } from "../services/HashManager"
import { DataBase } from "../data/connection"
import { Authenticator } from "../services/authenticator"

export class UserController {

    public async signup(
        req: Request,
        res: Response
    ) {
        try {

            const input: CreateUserInput = {
                name: req.body.name, 
                email: req.body.email, 
                password: req.body.password, 
            }

            const hashManager = new HashManager()
            const hashPassword = await hashManager.hash(input.password)

            const userBusiness = new UserBusiness()
            const userId = await userBusiness.signup(input.name, input.password, hashPassword)

            const authenticator = new Authenticator()
            const accessToken = authenticator.generateToken({id: userId})

            res.status(201).send({
                message:"Usuário criado!",
                token: accessToken
            })

        } catch(error) {
            res.status(400).send({error: error.message});
        }
        await DataBase.destroyConnection()
    }

    public async login(
        req:Request, 
        res: Response
        ){

        try{

            const input: LoginInput = {
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness();
            const user = await userBusiness.getUserByEmail(input);

            const authenticator = new Authenticator();
            const accessToken = authenticator.generateToken({id: user.getId()});

            res.status(200).send({token: accessToken});


        }catch(error){
            res.status(400).send({error: error.message});
        }

        await DataBase.destroyConnection();
    }

    public async addFriend(req: Request, res: Response){

        try{
            const token = req.headers.authorization!;
            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token);

            const input: FriendInput = {
                authorId: verifiedToken.id,
                targetId: req.body.id
            }

            const userBusiness = new UserBusiness();
            await userBusiness.addFriend(input);

            res.status(200).send({message: "Vocês são amigos agora!"});



        }catch(error){
            res.status(400).send({error: error.message});
        }

        await DataBase.destroyConnection();
    }

    public async unfriend(req: Request, res: Response){

        try{
            const token = req.headers.authorization!;
            const authenticator = new Authenticator();
            const verifiedToken = authenticator.getData(token);

            const input: FriendInput = {
                authorId: verifiedToken.id,
                targetId: req.body.id
            }

            const userBusiness = new UserBusiness();
            await userBusiness.unfriend(input);

            res.status(200).send({message: "Vocês não são mais amigos."});


        }catch(error){
            res.status(400).send({error: error.message});
        }

        await DataBase.destroyConnection();
    }


}