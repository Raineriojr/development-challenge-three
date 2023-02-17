import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from '@expo/vector-icons/MaterialIcons';

import { tabLinks } from "./tabLinks";

const TopTabNavigator = createMaterialTopTabNavigator();

export function TabNavigation() {
  return (
    <TopTabNavigator.Navigator
      tabBarPosition="bottom"
      screenOptions={{
        swipeEnabled: false
      }}
    >
      {tabLinks.map((link) => (
        <TopTabNavigator.Screen
          key={link.name}
          name={link.name}
          children={link.children}
          options={{
            tabBarIcon: ({ color, focused }) => <Icon name={link.icon} size={20} color={focused ? '#fd6d41' : color} />,
            tabBarIndicatorStyle: { backgroundColor: '#fd6d41' },
            tabBarShowIcon: true,
          }}
        />
      ))}
    </TopTabNavigator.Navigator>
  )
}