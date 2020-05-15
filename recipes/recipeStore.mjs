import {datastore} from "../datastore.mjs";

export async function getAllRecipes(){
    const query = datastore.createQuery('Recipe')
    return addIdToResult(await datastore.runQuery(query))
}

function addIdToResult(results){
    return results[0].map(result => {
        const symbols = Object.getOwnPropertySymbols(result)
        return {
            id: result[symbols[0]].name,
            ...result
        }
    });
}

export async function getRecipeById(id) {
    const query = datastore
        .createQuery('Recipe')
        .filter('__key__', '=', datastore.key(['Recipe', id]));
    return addIdToResult(await datastore.runQuery(query))
}

export async function removeRecipe(recipeId){
    return datastore.delete(buildRecipeKey(recipeId))
}

export function buildRecipeKey(recipeId){
    return datastore.key(['Recipe', recipeId])
}
