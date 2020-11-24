import { CreatePostInput, GetFeedInput, Post, GetFeedByTypeInput } from "../model/Post";
import { IdGenerator } from "../services/IdGenerator"
import { PostDatabase } from "../data/PostDatabase"

export class PostBusiness{

    public async createPost(input: CreatePostInput){

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const postDatabase = new PostDatabase();
        if(input.type.toLowerCase() !== "normal" && input.type.toLowerCase() !== "event" ){
            throw new Error("Tipo inválido");
        }
        await postDatabase.createPost(
            id, 
            input.photo, 
            input.description, 
            input.type, 
            input.createdAt, 
            input.authorId
        );
    }

    public async getPostById(input: GetFeedInput): Promise<Post[]>{

        const postDatabase = new PostDatabase();
        return await postDatabase.getPostById(input.authorId);

    }

    public async getFeedByType(input: GetFeedByTypeInput): Promise<Post[]>{

        const postDatabase = new PostDatabase();
        return await postDatabase.getFeedByType(input.type);
    }

}