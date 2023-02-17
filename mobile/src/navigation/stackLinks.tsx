import { Login } from '../screens/login';
import { RecipeDetail } from '../screens/RecipeDetail';
import { NewIngredient } from '../screens/NewIngredient';
import { EditIngredient } from '../screens/EditIngredient';
import { TabNavigation } from './tabNavigation';

type routeStackLinksProps = {
  name: string;
  children: () => JSX.Element;
}[]

export const routeStackLinks: routeStackLinksProps = [
  { name: 'login', children: () => <Login /> },
  { name: 'main', children: () => <TabNavigation /> },
  { name: 'detail', children: () => <RecipeDetail /> },
  { name: 'newIngredient', children: () => <NewIngredient /> },
  { name: 'editIngredient', children: () => <EditIngredient /> },
]