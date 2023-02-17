import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fdc17e30'
  },

  image: {
    flex: 0.75,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },

  content: {
    paddingHorizontal: 14,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 50 
  },

  subtitle: {
    flexWrap: 'wrap',
    fontSize: 16,
  },

  buttonContainer: {
    paddingHorizontal: 14,
    paddingBottom: 100,
    width: '100%',
    justifyContent: 'flex-end',
  },
  labelButton: {
    fontWeight: 'bold',
    fontSize: 16
  }
})