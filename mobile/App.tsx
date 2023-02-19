import { StatusBar } from 'react-native';
import { UserProvider } from './src/provider/userProvider';

import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <UserProvider>
      <Routes />
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </UserProvider>
  );
}
