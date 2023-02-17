import React from 'react';
import { View, FlatList } from "react-native";
import { IconButton, Searchbar, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { AppBar } from "../../components/appbar";
import { RecipeCard } from "../../components/recipeCard";
import { LoadingList } from '../../components/loadingList';

import { getRecipeList, searchRecipes } from "../../services/recipes.services";

import { style } from "./style";

export function Recipes() {
  const navigation = useNavigation();
  const goRecipeDetail = (data) => navigation.navigate('detail', data);

  const [recipeList, setRecipeList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchIsActive, setSearchIsActive] = React.useState(false);

  const onChangeSearch = query => setSearchQuery(query);

  const _searchRecipe = async () => {
    setSearchIsActive(true)
    const response = await searchRecipes(searchQuery);

    if (response.data.recipes.length === 0) {
      return setRecipeList(null)
    }
    setRecipeList(response.data.recipes)
  }

  const _getRecipeList = async () => {
    setSearchQuery('')
    const responseData = await getRecipeList();

    setRecipeList(responseData.data.possibleRecipes)
  }

  React.useEffect(() => {
    _getRecipeList()
  }, [])

  React.useEffect(() => {
    if (searchQuery.length === 0) {
      setSearchIsActive(false)
      _getRecipeList()
    }
  }, [searchQuery])

  function LoadingComponent() {
    if (recipeList === null) {
      return <Text>Receita não encontrada</Text>
    }
    return (
      <LoadingList />
    )
  }

  return (
    <View style={style.container}>
      <AppBar/>

      <Searchbar
        placeholder="Busque outras receitas"
        placeholderTextColor="#a6a6a4"
        style={style.searchBar}
        onChangeText={onChangeSearch}
        value={searchQuery}
        onIconPress={() => searchQuery.length === 0 ? null : _searchRecipe()}
        returnKeyType="search"
        onSubmitEditing={() => _searchRecipe()}
      />

      <View style={style.listContainer}>
        <View>
          <View style={style.header}>
            <Text
              variant='titleLarge'
              style={style.title}
            >
              {searchIsActive ? `Resultados da busca` : `Receitas possíveis`}
            </Text>
            {!searchIsActive && (
              <IconButton
                icon="reload"
                size={25}
                onPress={_getRecipeList}
                iconColor="#fd6d41"
              />
            )}
          </View>

          <Text
            variant='bodyLarge'
            style={style.subtitle}
          >
            {!searchIsActive &&
              `Com base nos ingredientes de sua lista, essas são as receitas mais prováveis de serem feitas.`
            }
          </Text>
        </View>
        <FlatList
          data={recipeList}
          extraData={recipeList}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<LoadingComponent />}
          renderItem={({ item, index }) => (
            <RecipeCard
              key={item.id}
              name={item.title}
              description={item.description}
              time={item.duration}
              image_url={item.image_url}
              onPress={() => goRecipeDetail(item)}
            />
          )}
        />
      </View>
    </View>
  )
}