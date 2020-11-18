import { Request, Response } from 'express'
import { AuthenticationData, getTokenData } from '../services/authenticator'
import { getRecipeByIdData } from '../data/getRecipeByIdData'
import { Recipe } from '../types'


export const getRecipeById = async (
    req: Request, 
    res: Response
    ) => {

    try {
        const recipeId:string = req.params.id
        const token:string = req.headers.authorization as string
        const tokenData:AuthenticationData = getTokenData(token)

        if(!token || !tokenData){
            res.status(404).send({message: "Não autorizado"})
        } else {
            const recipe:Recipe[] = await getRecipeByIdData(recipeId)

            if(!recipe.length){
                res.status(404).send({message: "Nenhuma receita encontrada"})
            }

            res.send({
                recipe: recipe[0]
            })
        }
    } catch (error) {
        if(error.message === `Cannot read property 'id' of undefined`){
            error.message = 'O id precisa ser fornecido'
        }
        if(error.message === `jwt malformed`){
            error.message = 'Token inválido'
        }
        res.status(400).send({message: error.message})
    }
}