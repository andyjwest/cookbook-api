import {formatData, saveEntity} from "../datastore.mjs";
import {formatStepData} from "./steps/steps.mjs";
import {getAllRecipes} from "./recipeStore.mjs";

export function getRecipes(req, res, next){
    getAllRecipes().then(e => {
        res.json(e)
        next()
    }).catch(e =>{
        console.log(e)
        res.status(500)
        res.send(e)
        next()
    })
}

export function createRecipe(req, res, next) {
    const recipe = req.body
    //TODO validate the recipe

    const recipePromise = saveEntity(['Recipe', recipe.id], formatRecipeData(recipe));
    const stepsPromises = recipe.steps ? recipe.steps.map((step, index) => {
        return saveEntity(['Recipe', recipe.id, 'Step', index + 1], formatStepData(step))
    }) : Promise.resolve()

    Promise.all([recipePromise, ...stepsPromises]).then(()=>{
        res.sendStatus(201)
        next()
    }).catch(e => {
        res.status(500)
        res.send(e)
        next()
    })
}

function formatRecipeData(recipe){
    return formatData(['title','source','titleImage','yields','created', 'priorStepRequired'], recipe)
}
