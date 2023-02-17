import { View, TouchableOpacity } from 'react-native';
import { Text, Card as PaperCard } from 'react-native-paper';

import { MaterialIcons } from '@expo/vector-icons';

import { style } from './style';

interface RecipeCardProps {
  name: string;
  description: string;
  time: string;
  image_url: string
  onPress: () => void
}

export function RecipeCard(props: RecipeCardProps) {
  return (
    <TouchableOpacity 
      style={style.container} 
      activeOpacity={0.7}
      onPress={props.onPress}  
    >
      <View style={style.content}>
        <PaperCard.Cover
          source={{ uri: props.image_url }}
          style={style.cover}
        />
        <View style={style.description}>
          <View>
            <Text
              lineBreakMode='middle'
              numberOfLines={1}
              variant="titleLarge"
              style={style.title}
            >
              {props.name}
            </Text>
            <Text
              variant="labelLarge"
              lineBreakMode='middle'
              numberOfLines={2}
            >
              {props.description}
            </Text>
          </View>
          <View style={style.descriptionBottom}>
            <MaterialIcons
              name='access-time'
              style={{ marginRight: 4 }}
              size={18}
            />
            <Text
              variant="bodyMedium"
              lineBreakMode='middle'
              numberOfLines={2}
            >
              Preparo: {`${props.time || '--'}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}