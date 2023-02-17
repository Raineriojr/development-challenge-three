import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: 'transparent',
    backgroundColor: '#fff'
  },

  content: {
    flexDirection: 'row',
    borderRadius: 10,
    height: 130,
  },

  title: {
    fontWeight: 'bold',
  },

  description: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: 'space-between'
  },

  descriptionBottom:{
    flexDirection: "row",
    alignItems: 'center',
  },

  cover: {
    width: 130,
    height: 130
  }
})