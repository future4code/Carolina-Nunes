
export type User = {
   id: string,
   name: string,
   email: string,
   type: string
}
export type Search = {
   name: string,
   type: string
}
export type Search2 = {
   name: string,
   type: string,
   orderBy: string,
   orderType: string,
   page: number
}