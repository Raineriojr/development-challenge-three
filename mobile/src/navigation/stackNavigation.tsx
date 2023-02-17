import { createStackNavigator } from '@react-navigation/stack'
import { routeStackLinks } from '../navigation/stackLinks';

const StackNavigator = createStackNavigator();

export const StackNavigation = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName='login'
      screenOptions={{
        headerShown: false
      }}
    >
      {routeStackLinks.map((links) => (
        <StackNavigator.Screen
          key={links.name}
          name={links.name}
          children={links.children}
        />
      ))}

    </StackNavigator.Navigator>
  )
}