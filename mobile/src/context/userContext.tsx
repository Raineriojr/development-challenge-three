import React from 'react';

export interface ingredientListProps {
  id: number,
  name: string,
  number_of_units: number,
  measurement: string,
  created_at: Date
}[]

interface contextProps {
  ingredientList: ingredientListProps;
  setIngredientList: (data: ingredientListProps[]) => void
}[]

export const UserContext = React.createContext<contextProps>(null!);