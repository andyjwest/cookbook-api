import {datastore} from "../datastore.mjs";

export async function getAllRecipes(){
    const query = datastore.createQuery('Recipe')
    const queryResults = await datastore.runQuery(query)
    return queryResults[0]
}

export async function removeRecipe(recipeId){
    return datastore.delete(buildRecipeKey(recipeId))
}

export function buildRecipeKey(recipeId){
    return datastore.key(['Recipe', recipeId])
}
