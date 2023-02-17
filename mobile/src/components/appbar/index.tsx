import { Appbar as NativeAppBar } from 'react-native-paper';

import { style } from './style';

export function AppBar(props: { title?: string, backAction?: () => void }) {
  return (
    <NativeAppBar.Header style={style.container}>
      {props.backAction ?
        <NativeAppBar.BackAction
          iconColor='#fff'
          onPress={() => props.backAction()}
        />
        :
        <NativeAppBar.Action icon='' />
      }
      <NativeAppBar.Content
        title={props.title || "TASTY RECIPES"}
        style={style.content}
        color="#FFFFFF"
        titleStyle={{ fontWeight: '600' }}
      />
      <NativeAppBar.Action icon='' />
    </NativeAppBar.Header>
  )
}