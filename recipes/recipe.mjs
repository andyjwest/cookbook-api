import {createRecipe} from "./recipesService.mjs";
import {removeRecipe} from "./recipeStore.mjs";
import {getRecipeSteps} from "./steps/steps.mjs";
import {getRecipeById} from "./recipeStore.mjs";

export function updateRecipe(req, res, next) {
    createRecipe(req, res, next)
}

export function getRecipe(req, res) {
    if (req.params.recipeId) {
        getRecipeById(req.params.recipeId)
            .then(it => res.json(it[0]))
            .catch(e => {
                console.error(e)
                res.send(e)
            })
    } else {
        res.statusCode(401)
        res.send('Invalid recipeId')
    }
}

export async function deleteRecipe(req, res, next) {
    if (req.params.recipeId) {
        return removeRecipe(req.params.recipeId)
    } else {
        await Promise.reject('recipeId required')
    }
}

export function getSteps(req, res, next) {
    if (req.params.recipeId) {
        getRecipeSteps(req.params.recipeId)
            .then(it => res.json(it))
            .catch(e => {
                console.error(e)
                res.send(e)
            })
    } else {
        res.statusCode(401)
        res.send('Invalid recipeId')
    }
}
