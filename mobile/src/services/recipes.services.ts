import { api } from "./api";

export const getRecipeList = async () => {
  try {
    const listData = await api.get('/recipes/list/possible-recipes');

    return listData

  } catch (error: any) {
    throw {
      error: error.message,
      code: error.code
    }
  }
}

export const searchRecipes = async (query: string) => {  
  try {
    const listData = await api.get(`/recipes/search?name=${query}`);

    return listData

  } catch (error: any) {
    throw {
      error: error.message,
      code: error.code
    }
  }
}