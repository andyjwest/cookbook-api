import {datastore} from "../datastore.mjs";

export async function getAllRecipes(){
    const query = datastore.createQuery('Recipe')
    return await datastore.runQuery(query)
}

export async function removeRecipe(recipeId){
    return datastore.delete(buildRecipeKey(recipeId))
}

export function buildRecipeKey(recipeId){
    return datastore.key(['Recipe', recipeId])
}