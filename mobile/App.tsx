import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Routes } from './src/routes/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </>
  );
}
