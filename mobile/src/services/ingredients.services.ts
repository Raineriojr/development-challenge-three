import { api } from "./api";

export const getIngredientList = async () => {
  try {
    const listData = await api.get('/ingredients/list');

    return listData

  } catch (error: any) {
    throw {
      error: error.message,
      code: error.code
    }
  }
}

export const removeIngredient = async (id: number) => {
  try {
    await api.delete(`/ingredients/delete/${id}`);

  } catch (error: any) {
    throw {
      error: error.message,
      code: error.code
    }
  }
}

export const resetStock = async (id: number) => {
  try {
    await api.patch(`/ingredients/reset/${id}`);

  } catch (error: any) {
    throw {
      error: error.message,
      code: error.code
    }
  }
}