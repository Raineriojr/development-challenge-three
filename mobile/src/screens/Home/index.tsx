import React from 'react';
import { View, FlatList } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AppBar } from '../../components/appbar';
import { Card } from '../../components/card';
import { ItemList } from '../../components/itemList';
import { LoadingList } from '../../components/loadingList';

import { getIngredientList, removeIngredient, resetStock } from '../../services/ingredients.services';

import { style } from './style';
import { fakeRecipes } from '../../utils';
import { UserContext } from '../../context/userContext';


export function Home() {
  const navigation = useNavigation();
  const goNewIngredient = () => navigation.navigate('newIngredient');
  const goEditIngredient = (data) => navigation.navigate('editIngredient', data);

  const { ingredientList, setIngredientList } = React.useContext<any>(UserContext);

  React.useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    setIngredientList([])
    const listData = await getIngredientList()

    if(listData.data.ingredient.length === 0){
      return setIngredientList(null)
    }
    
    let test = listData?.data.ingredient;
    listData.data.ingredient.map((elem, index) => {
      if (elem.number_of_units === 0) {
        listData.data.ingredient.splice(index, 1);
        test.push(elem)
      }
    })
    setIngredientList(test);
  }

  const _removeIngredient = async (id: number) => {
    await removeIngredient(id);
    getList()
  }

  const _resetStock = async (id: number) => {
    await resetStock(id);
    getList()
  }

  return (
    <View style={style.container}>
      <AppBar />

      <Text
        variant='titleLarge'
        style={[style.title, { paddingHorizontal: 14 }]}
      >
        Novas Receitas
      </Text>
      <View style={style.cardContainer}>
        <FlatList
          data={fakeRecipes}
          extraData={fakeRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.name}
          ListEmptyComponent={<LoadingList array={fakeRecipes} />}
          renderItem={({ item, index }) => (
            <Card 
              key={`${index}-${item.name}`}
              name={item.name} 
              description={item.description}
            />
          )}
        />
      </View>

      <View style={style.listContainer}>
        <View style={style.header}>
          <Text
            variant='titleLarge'
            style={style.title}
          >
            Meus Ingredientes
          </Text>
          <View style={style.groupIcon}>
            <IconButton
              icon="plus-circle"
              size={30}
              onPress={goNewIngredient}
              iconColor="#fd6d41"
            />
            <IconButton
              icon="reload"
              size={30}
              onPress={getList}
              iconColor="#fd6d41"
            />
          </View>
        </View>
        <FlatList
          data={ingredientList}
          extraData={ingredientList}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<LoadingList array={ingredientList} title="Você ainda não adicionou ingredientes à sua lista." />}
          renderItem={({ item, index }) => (
            <ItemList
              actions
              key={item.id}
              name={item.name}
              measurement={item.measurement}
              value={item.number_of_units}
              remove={() => _removeIngredient(item.id)}
              reset={() => _resetStock(item.id)}
              edit={() => goEditIngredient(item)}
            />
          )}
        />
      </View>
    </View>
  )
}