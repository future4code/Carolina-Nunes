import { DataBase } from "./connection"
import { POST_TYPES, Post } from "../model/Post"

export class PostDatabase extends DataBase{

    private static tableName: string = 'labook_posts'

    public async createPost(
        id: string,
        photo: string,
        description: string,
        type: string,
        createdAt: string,
        authorId: string,
        ): Promise<void> {

        try {
            await this.getConnection()
                .insert({
                    id, 
                    photo,
                    description,
                    type,
                    createdAt,
                    authorId
                }).into(PostDatabase.tableName)

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getPostById(
        authorId: string
        ): Promise<any> {

        try {
            const postArray: Post[] = []

            const result = await this.getConnection()
            .raw(`
            SELECT p.* FROM ${PostDatabase.tableName} p
            JOIN labook_friends f
            ON p.authorId = f.id_responder
            WHERE f.id_requester = "${authorId}"
            ORDER BY p.createdAt DESC;
            `)

            for(let post of result[0]) {
                postArray.push(Post.toPostModel(post));
            }

            return postArray;

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);  
        }
    }

    public async getFeedByType(type: POST_TYPES): Promise<Post[]>{

        try {
            const postArray: Post[] = [];

            const result = await this.getConnection()
            .raw(`
            SELECT p.* FROM ${PostDatabase.tableName} p
            WHERE type = "${type}"
            ORDER BY p.createdAt DESC;
            `)

            for(let post of result[0]) {
                postArray.push(Post.toPostModel(post));
            }

            return postArray;
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);   
        }

    }

}
