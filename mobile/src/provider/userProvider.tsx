import React from "react";
import { UserContext } from "../context/userContext";

export const UserProvider = ({ children }: any) => {
  const [ingredientList, setIngredientList] = React.useState<any>();

  return (
    <UserContext.Provider
      value={{
        ingredientList,
        setIngredientList
      }}>
      {children}
    </UserContext.Provider>
  )
}