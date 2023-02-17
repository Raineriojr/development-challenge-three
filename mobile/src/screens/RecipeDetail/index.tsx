import React from "react";
import { ScrollView, View } from "react-native"
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppBar } from "../../components/appbar";
import { ItemList } from "../../components/itemList";
import { style } from "./style";

export function RecipeDetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const data: any = route.params

  const [activeButton, setActiveButton] = React.useState(true);

  const ingredientList: [] = data.ingredients.split(/,/);

  return (
    <View style={style.container}>
      <AppBar
        title={data.title}
        backAction={() => navigation.goBack()}
      />

      <Card.Cover
        source={{ uri: data.image_url }}
      />

      <View style={style.buttonGroup}>
        <Button
          children="Ingredientes"
          mode="contained-tonal"
          style={style.button}
          buttonColor={activeButton ? "#fd6d41" : "#fd6d4180"}
          onPress={() => setActiveButton(true)}
          labelStyle={style.textButton}
        />
        <Button
          children="Detalhes"
          mode="contained-tonal"
          style={style.button}
          buttonColor={!activeButton ? "#fd6d41" : "#fd6d4180"}
          onPress={() => setActiveButton(false)}
          labelStyle={style.textButton}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.listContainer}
      >
        {activeButton ? (<>
          {ingredientList.map(item => (
            <ItemList
              key={item}
              name={item}
            />
          ))}
        </>)
          :
          (
            <Text variant="bodyLarge">
              {data.description.replace(/,\d/g, `${'\n\n'}`).replace(/(1)/, "")}
            </Text>
          )
        }
      </ScrollView>
    </View>
  )
}