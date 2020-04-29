import express from 'express'
import {createRecipe, getRecipes} from "./recipesService.mjs";
import {getSteps} from "./recipe.mjs";
import {deleteRecipe, updateRecipe} from "./recipe.mjs";
import {createStep, deleteStep} from "./steps/steps.mjs";

let router = express.Router()

router.get('/', getRecipes)
router.post('/', createRecipe)
router.patch('/:recipeId', updateRecipe)
router.delete('/:recipeId', deleteRecipe)
router.get('/:recipeId/steps', getSteps)
router.post('/:recipeId/steps', createStep)
router.patch('/:recipeId/steps/:stepId', createStep)
router.delete('/:recipeId/steps/:stepId', deleteStep)

export const route = router