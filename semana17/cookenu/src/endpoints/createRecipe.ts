import { Request, Response } from 'express'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { createRecipeData } from '../data/createRecipeData'


export const createRecipe = async (
    req:Request, 
    res: Response
    ) => {

    const { title, description } = req.body
  
    try{
        const token:string = req.headers.authorization as string
        const tokenData: AuthenticationData = getTokenData(token)
        if(!token || !tokenData){
            res.status(404).send({message: "Não autorizado"})
        }
        if(!title || !description){
            res.status(404).send({message: "Preencha o título e/ou a descrição"})
        } else {
            const create_date:Date = new Date()
            const recipe_creator_id:string = tokenData.id

            await createRecipeData(
                title,
                description,
                create_date,
                recipe_creator_id
            )

            res.status(200).send({
                message:"Receita criada!",
            })
        }
    } catch (error) {
        res.status(400).send({message: error.message})
}