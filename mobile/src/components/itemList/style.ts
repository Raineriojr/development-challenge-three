import { StyleSheet } from "react-native";

let CARD_HEIGHT = 50; 

export const style = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    height: CARD_HEIGHT,
    shadowColor: 'transparent'
  },
  
  content: {
    height: CARD_HEIGHT,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },

  icon: {
    margin: 0
  }
})