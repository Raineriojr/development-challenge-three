import React from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/logo.webp'
import { style } from './style';

export function Login() {
  const navigation = useNavigation();
  
  const goHome = () => navigation.navigate('main')

  return (
    <View style={style.container}>
      <Image
        source={Logo}
        style={style.image}
      />
      <View style={style.content}>
        <Text style={style.title} variant='titleLarge'>TASTY RECIPES</Text>
        <Text style={style.subtitle}>👨🏽‍🍳 Encontre receitas que dão match com seus ingredientes!</Text>
      </View>

      <View style={style.buttonContainer}>
        <Button
          children="Entrar"
          mode='contained-tonal'
          buttonColor="#fd6d41"
          textColor='#FFF'
          labelStyle={style.labelButton}
          onPress={goHome}
        />
      </View>
    </View>
  )
}