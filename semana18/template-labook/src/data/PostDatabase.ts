import { connection } from "./connection"
import { POST_TYPES } from "../model/Post"

class PostDatabase{
    private tableName: string = 'labook_posts'

    public async createPost(
        id: string,
        photo: string,
        description: string,
        type: POST_TYPES,
        createdAt: Date,
        authorId: string,
    ) {
        await connection
            .insert({
                id, 
                photo,
                description,
                type,
                createdAt,
                authorId
            }).into(this.tableName)
    }

    public async getPostById(
        id: string
    ): Promise<any> {
        const post = await connection
        .select("*")
        .from (this.tableName)
        .where({ id })

        return post[0][0]
    }
}

export const postDatabase: PostDatabase = new PostDatabase()