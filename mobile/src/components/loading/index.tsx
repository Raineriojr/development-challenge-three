import React from 'react';
import { ActivityIndicator, Modal, Portal } from 'react-native-paper';

export function Loading(props:{visible: boolean}) {
  return (
    <Portal>
      <Modal
        visible={props.visible}
        dismissable={false}
      >
        <ActivityIndicator
          size="large"
          color='#fd6d41'
        />
      </Modal>
    </Portal>
  )
}