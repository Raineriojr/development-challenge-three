import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </PaperProvider>
  )
}