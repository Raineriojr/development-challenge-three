import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  cardContainer:{
    flexDirection: "row",
    alignItems: 'center',
    height: 190,
  },

  listContainer:{
    flex: 1,
    width: '100%',
    paddingHorizontal: 14,
  },

  title: {
    fontWeight: 'bold',
    marginTop: 5,
    lineHeight: 60
  },

  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  groupIcon: {
    flexDirection: "row-reverse",
    alignItems: 'center'
  }
})