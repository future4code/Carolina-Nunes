import { Request, Response } from "express";
import { Authenticator } from "../services/authenticator"
import { CreatePostInput, GetFeedInput, GetFeedByTypeInput, Post } from "../model/Post";
import { PostBusiness } from "../business/PostBusiness";
import { DataBase } from "../data/connection";

export class PostController{

    public async createPost(
        req: Request,
        res: Response
        ) {

        try{

            const token = req.headers.authorization!
            const authenticator = new Authenticator()
            const verifiedToken = authenticator.getData(token)

            const input: CreatePostInput = new CreatePostInput(
                req.body.photo,
                req.body.description,
                req.body.type,
                req.body.createdAt,
                verifiedToken.authorId
            )

            const postBusiness = new PostBusiness();
            await postBusiness.createPost(input)

            res.status(200).send({message: "Post criado com sucesso!"});


        } catch(error){
            res.status(400).send({error: error.message});
        }
    }

    public async getPostById(
        req: Request,
        res: Response
        ){

            try{

                const token = req.headers.authorization!;

                const authenticator = new Authenticator();
                const verifiedToken = authenticator.getData(token);

                const input: GetFeedInput = {
                    authorId: verifiedToken.id
                }

                const postBusiness = new PostBusiness();
                const postsList = await postBusiness.getPostById(input);

                res.status(200).send(postsList);

            } catch (error) {
                res.status(400).send({error: error.message});
            }
            await DataBase.destroyConnection()
    }

    public async getFeedByType(
        req: Request,
        res: Response
        ){

            try {

                const token = req.headers.authorization!

                const authenticator = new Authenticator()
                const verifiedToken = authenticator.getData(token)

                const input: GetFeedByTypeInput = {
                    type: Post.mapStringToPostType(req.query.type as string)
                }

                const postBusiness = new PostBusiness(); 
                const feedByType = await postBusiness.getFeedByType(input);

                res.status(200).send(feedByType);

            } catch (error) {
                res.status(400).send({error: error.message});
            }

            await DataBase.destroyConnection();
    }
}