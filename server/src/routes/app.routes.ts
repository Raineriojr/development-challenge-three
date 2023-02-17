import { FastifyInstance } from 'fastify';

import IngredientsController from '../controllers/ingredientsController';
import RecipesController from '../controllers/recipesController';

export async function appRoutes (app: FastifyInstance) {  
  // Ingredient routes 
  app.get('/ingredients/list', IngredientsController.index)
  app.post('/ingredients/create', IngredientsController.create)
  app.put('/ingredients/update/:id', IngredientsController.update)
  app.delete('/ingredients/delete/:id', IngredientsController.delete)
  app.patch('/ingredients/reset/:id', IngredientsController.resetStock)

  // Recipes routes 
  app.get('/recipes/list-all', RecipesController.listAll)
  app.get('/recipes/search', RecipesController.search)
  app.get('/recipes/list/possible-recipes', RecipesController.listOfPossibleRecipes)
}