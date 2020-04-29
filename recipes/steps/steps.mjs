import {formatData, saveEntity} from "../../datastore.mjs";
import {datastore} from "../../datastore";
import {buildRecipeKey} from "../recipeStore";

export async function getRecipeSteps(recipeId){
    if(recipeId){
        const query = datastore.createQuery('Step').hasAncestor(buildRecipeKey(recipeId))
        return await datastore.runQuery(query).then(results => {
            results[0]
        })
    }else{
        return Promise.reject("recipeId is required")
    }
}

export function createStep(req, res, next) {
    //TODO validate step
    saveEntity(['Recipe', req.params.recipeId, 'Step', req.body.position + 1 ], formatStepData(req.body.step))
        .then(() => {
            res.sendStatus(201)
            next()
        })
        .catch(e => {
            res.status(500)
            res.send(e)
            next()
        })
}

export function deleteStep(req, res, next) {

}

export function formatStepData(step) {
    return formatData(['equipment', 'temperature', 'description', 'time', 'ingredients'], step)
}