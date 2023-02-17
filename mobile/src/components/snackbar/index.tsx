import { } from 'react-native'
import { Snackbar as SnackbarPaper } from 'react-native-paper';

export function Snackbar(props: { content: string, visible: boolean }) {
  return (
    <SnackbarPaper
      visible={props.visible}
      onDismiss={() => {}}
      duration={2 * 1000}
      children={props.content}
    />
  )
}