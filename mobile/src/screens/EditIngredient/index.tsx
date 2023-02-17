import React from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Dropdown from 'react-native-paper-dropdown';
import { useRoute, useNavigation } from '@react-navigation/native';

import { AppBar } from '../../components/appbar';
import { style } from './style';
import { Loading } from '../../components/loading';
import { api } from '../../services/api';
import { measurementList } from '../../utils';
import { Snackbar } from '../../components/snackbar';

export function EditIngredient() {
  const navigation = useNavigation();
  const route = useRoute();
  const data: any = route.params;

  const [showSelect, setShowSelect] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);
  const [showSnack, setShowSnack] = React.useState({ status: false, text: "" });

  const [measurement, setMeasurement] = React.useState(data.measurement)
  const [inputData, setInputData] = React.useState({
    name: data.name,
    number_of_units: data.number_of_units
  })

  async function submit() {
    const body = { ...inputData, measurement }

    setShowLoading(true)
    try {
      await api.put(`/ingredients/update/${data.id}`, body)

      setShowSnack({ status: true, text: "Ingrediente atualizado com sucesso" })
      if (showSnack) {
        setTimeout(() => {
          navigation.goBack()
        }, 2 * 1000)
      }
    } catch (error) {
      console.log('Erro:', error);
      setShowSnack({ status: false, text: "Falha ao atualizar ingrediente" })
      setShowLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <Loading visible={showLoading} />
      <Snackbar
        visible={showSnack.status}
        content={showSnack.text}
      />
      <AppBar
        backAction={navigation.goBack}
      />

      <Text variant='titleLarge' style={style.title}>
        Editar ingrediente
      </Text>
      <View style={style.formContainer}>
        <TextInput
          mode='outlined'
          label="Nome"
          placeholder='Nome do ingrediente'
          activeOutlineColor='#fd6d41'
          onChangeText={(value) => setInputData({ ...inputData, name: value })}
          value={inputData.name}
        />
        <View style={style.inputGroup}>
          <TextInput
            mode='outlined'
            label="Quantidade"
            placeholder='0'
            keyboardType='numeric'
            style={style.inputNumber}
            activeOutlineColor='#fd6d41'
            onChangeText={(value) => setInputData({ ...inputData, number_of_units: Number(value) })}
            value={inputData.number_of_units}
          />

          <View style={{ width: '40%' }}>
            <Dropdown
              label='medida'
              mode='outlined'
              visible={showSelect}
              showDropDown={() => setShowSelect(true)}
              onDismiss={() => setShowSelect(false)}
              value={measurement}
              activeColor='#fd6d41'
              setValue={(value) => setMeasurement(value)}
              list={measurementList}
            />
          </View>
        </View>
        <Button
          children="Adicionar"
          mode='outlined'
          buttonColor='#fd6d41'
          textColor='#fff'
          labelStyle={style.textButton}
          onPress={submit}
        />
      </View>
    </View>
  )
}