import { View } from "react-native";
import { Text } from 'react-native-paper';
import { AppBar } from "../../components/appbar";

export function Profile() {
  return (
    <View style={{ flex: 1, }}>
      <AppBar />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>

        <Text variant="headlineMedium">
          EM BREVE
        </Text>
      </View>
    </View>
  )
}