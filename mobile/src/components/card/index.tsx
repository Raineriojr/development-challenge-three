import { View } from 'react-native';
import { Text, Card as PaperCard } from 'react-native-paper';

import { style } from './style';

interface CardPRops {
  name: string, 
  description: string, 
}

let images = [
  "https://www.shutterstock.com/image-photo/chef-hands-cooking-italian-pasta-260nw-1476805823.jpg",
  "https://www.shutterstock.com/image-photo/cooking-apple-pie-260nw-401410738.jpg",
  "https://www.shutterstock.com/image-photo/cast-iron-pot-fresh-herbs-260nw-1424680868.jpg",
  "https://www.shutterstock.com/image-photo/cooking-table-herbs-spices-utensils-260nw-547416616.jpg"
]

export function Card(props: CardPRops) {
  let random = Math.floor(Math.random() * 3)
  return (
    <PaperCard style={style.container}>
      <View style={style.content}>
        <Text
          style={style.title}
          lineBreakMode='middle'
          numberOfLines={1}
          variant="titleLarge"
        >
          {props.name}
        </Text>
        <Text 
          variant="titleMedium"
          style={style.description}
        >
          {props.description}
        </Text>
      </View>
      <PaperCard.Cover
        source={{ uri: images[random] }}
        style={style.cover}
      />
    </PaperCard>
  )
}