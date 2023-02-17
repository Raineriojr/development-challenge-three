import React from 'react';
import { View } from 'react-native';
import { Text, Card as PaperCard, IconButton, Menu } from 'react-native-paper';

import { style } from './style';

interface itemListProps {
  name: string,
  value?: string | number,
  measurement?: string
  actions?: boolean
  remove?: () => void
  reset?: () => void
  edit?: () => void
}

export function ItemList(props: itemListProps) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const _edit = () => {
    props.edit()
    closeMenu()
  }
  return (
    <PaperCard style={style.container} contentStyle={style.content}>
      <View style={style.content}>
        <IconButton
          icon="circle-small"
          style={style.icon}
          size={30}
          iconColor={props.value === 0 ? '#A6a6a4' : "#fd6d41"}
        />

        {props.value ?
          <Text variant="titleMedium" style={{ color: props.value === 0 ? '#A6a6a4' : '#1e1a1d' }}>
            {`${props.name} - ${props.value} ${props.measurement}`}
          </Text>
          :
          <Text variant="titleMedium" style={{ color: props.value === 0 ? '#A6a6a4' : '#1e1a1d' }}>
            {`${props.name}`}
          </Text>
        }
      </View>

      {props.actions && (
        <Menu
          contentStyle={{ backgroundColor: '#f8f8f8' }}
          visible={visible}
          onDismiss={closeMenu}
          anchorPosition="bottom"
          anchor={
            <IconButton
              icon="dots-vertical"
              onPress={openMenu}
            />
          }
        >
          <Menu.Item onPress={_edit} title="Editar" />
          <Menu.Item onPress={props.reset} title="Zerar estoque" disabled={props.value === 0} />
          <Menu.Item onPress={props.remove} title="Remover" />
        </Menu>
      )}
    </PaperCard>
  )
}