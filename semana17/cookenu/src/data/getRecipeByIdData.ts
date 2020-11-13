import { connection } from '..'
import { Recipe } from '../types'

export const getRecipeByIdData = async (
    id:string
    ): Promise<Recipe[]> => {

        const recipe: Recipe[] = await connection
            .select("*")
            .from("cookenu_Recipe")
            .where({ id });

        return recipe
}
