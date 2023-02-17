import { MaterialIcons } from '@expo/vector-icons';

//* tab navigation
import { Home } from "../screens/Home";
import { Recipes } from "../screens/Recipes";
import { Profile } from "../screens/Profile";

type routeTabLinksProps = {
  name: string;
  children: () => JSX.Element;
  icon: keyof typeof MaterialIcons.glyphMap
}[]

export const tabLinks: routeTabLinksProps = [
  { name: 'Home', children: () => <Home />, icon: 'home' },
  { name: 'Receitas', children: () => <Recipes />, icon: 'restaurant-menu' },
  { name: 'Perfil', children: () => <Profile />, icon: 'account-circle' }
]


