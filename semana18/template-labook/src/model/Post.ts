import moment, { Moment } from 'moment'

export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export class Post {

    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: Moment,
        private authorId: string
    ){
        switch(this.type){
            case "event":
                this.type = POST_TYPES.EVENT
                break;
            default:
                this.type = POST_TYPES.NORMAL
        }
        this.id = id
        this.photo = photo
        this.description = description
        this.createdAt = moment(this.createdAt)
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
    setId = (id: string) => this.id = id 

    public getPhoto = (): string => this.photo
    setPhoto = (photo: string) => this.photo = photo

    public getDescription = (): string => this.description
    setDescription = (description: string) => this.description = description

    public getType = (): string => this.type
    setType = (type: POST_TYPES) => this.type = type

    public getCreateAt = (): Moment => this.createdAt
    setCreateAt = (createdAt: Moment) => this.createdAt = createdAt

    public getAuthorId = (): string => this.authorId
    setAuthorId = (authorId: string) => this.authorId = authorId

    static toPostModel(object: any){
        return new Post(object.id, object.photo, object.description, object.type, object.createdAt, object.authorId);
    }

    static mapStringToPostType(value: string){
        switch(value){
            case "event":
               return POST_TYPES.EVENT
            default:
                return POST_TYPES.NORMAL
        }
    }

}

export class CreatePostInput {
    public photo: string
    public description: string
    public type: string
    public createdAt: string
    public authorId: string

    constructor(
        photo: string,
        description: string,
        type: string,
        createdAt: string = moment().format("YYYY-MM-DD"),
        authorId: string
    ){
        this.photo = photo
        this.description = description
        this.type = type
        this.createdAt = createdAt
        this.authorId = authorId
    }
}

export interface GetFeedInput{
    authorId: string
}
 
export interface GetFeedByTypeInput{
    type: POST_TYPES;
}

