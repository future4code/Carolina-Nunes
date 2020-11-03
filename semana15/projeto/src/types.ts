export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string,
}

export type Task = {
    id: string,
    title: string,
    description: string,
    status: STATUS,
    limitDate: string,
    creatorUser: string
}

export enum STATUS {
    TO_DO = "to do",
    DOING = "doing",
    DONE = "done"
}