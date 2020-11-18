export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export class Post {
    private id: string
    private photo: string
    private description: string
    private type: POST_TYPES
    private createdAt: Date
    private authorId: string

    constructor(
        id: string,
        photo: string,
        description: string,
        type: POST_TYPES = POST_TYPES.NORMAL,
        createdAt: Date,
        authorId: string
    ){
        this.id = id
        this.photo = photo
        this.description = description
        this.type = type
        this.createdAt = createdAt
        this.authorId = authorId

        if (type.toUpperCase() === POST_TYPES.NORMAL) {
            this.type = POST_TYPES.NORMAL
        } else if (type.toUpperCase() === POST_TYPES.EVENT) {
            this.type =  POST_TYPES.EVENT
        } else {
            throw new Error("Envie um Tipo válido. Os valores válidos são EVENT ou NORMAL")
        }
    }

    public getId = (): string => this.id
    public getPhoto = (): string => this.photo
    public getDescription = (): string => this.description
    public getType = (): string => this.type
    public getCreateAt = (): Date => this.createdAt
    public getAuthorId = (): string => this.authorId

}

export interface CreatePostInput {
    photo: string,
    description: string,
    type: string,
    createdAt: Date,
    authorId: string
}

export type CreatePostOutput = {
    token: string
}
 
export interface CreatePostOutputInterface {
    token: string
}

export function numberToBoolean(value: number): boolean {
    if (value !== 0) {
       return true
    }
    return false;
}
 
export function userTypeToString(type: POST_TYPES): string {
    if (type === "normal") {
       return "normal";
    }
    return "event";
}