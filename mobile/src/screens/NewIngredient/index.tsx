import React from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Dropdown from 'react-native-paper-dropdown';
import { useNavigation } from '@react-navigation/native';

import { AppBar } from '../../components/appbar';
import { style } from './style';
import { Loading } from '../../components/loading';
import { api } from '../../services/api';
import { measurementList } from '../../utils';
import { Snackbar } from '../../components/snackbar';

export function NewIngredient() {
  const navigation = useNavigation();

  const [showSelect, setShowSelect] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);
  const [showSnack, setShowSnack] = React.useState({ status: false, text: "" });

  const [inputData, setInputData] = React.useState({
    name: '',
    number_of_units: 0
  })
  const [measurement, setMeasurement] = React.useState('')

  async function submit() {
    const body = { ...inputData, measurement }

    setShowLoading(true)
    try {
      await api.post('/ingredients/create', body)

      setShowSnack({ status: true, text: "Ingrediente cadastrado com sucesso" })
      if (showSnack) {
        setTimeout(() => {
          navigation.goBack()
        }, 2 * 1000)
      }
    } catch (error) {
      console.log('Erro:', error);
      setShowSnack({ status: false, text: "Falha ao cadastrar ingrediente" })
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
        Cadastrar ingredientes
      </Text>
      <View style={style.formContainer}>
        <TextInput
          mode='outlined'
          label="Nome"
          placeholder='Nome do ingrediente'
          activeOutlineColor='#fd6d41'
          onChangeText={(value) => setInputData({ ...inputData, name: value })}
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