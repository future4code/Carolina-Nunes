import { connection } from '..'

export const createRecipeData = async (
    title: string,
    description: string,
    create_date: Date,
    recipe_creator_id: string
    ): Promise<void> => {
        await connection('cookenu_Recipe')
        .insert({
            title,
            description,
            create_date,
            recipe_creator_id
        })
} 

