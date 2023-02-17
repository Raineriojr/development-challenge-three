import { StyleSheet, Dimensions, StatusBar } from "react-native";

const width = Dimensions.get('screen').width;

let CARD_HEIGHT = 180; 

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: width * 0.65,
    height: CARD_HEIGHT,
    marginHorizontal: 10,
    backgroundColor: 'gray'
  },
  content: {
    position: 'absolute',
    padding: 15,
    zIndex: 111,
  },
  title: {
    borderRadius: 5,
    lineHeight: 30,
    paddingHorizontal: 5,
    backgroundColor: '#f1f1f170',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5
  },
  description: {
    borderRadius: 5,
    lineHeight: 30,
    paddingHorizontal: 5,
    backgroundColor: '#f1f1f150',
    color: '#fff',
  },
  cover: {
    height: CARD_HEIGHT,
    opacity: 0.85
  }
})