import { ActivityIndicator } from 'react-native-paper';

export function LoadingList() {
  return (
    <ActivityIndicator
      color='#fd6f41'
      style={{ marginVertical: 15 }}
    />
  )
}