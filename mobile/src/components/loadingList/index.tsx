import { ActivityIndicator, Text } from 'react-native-paper';

export function LoadingList(props: { array: Array<any>, title?: string }) {
  if (props.array === null) {
    return <Text>{props.title}</Text>
  }
  return (
    <ActivityIndicator
      color='#fd6f41'
      style={{ marginVertical: 15 }}
    />
  )
}
