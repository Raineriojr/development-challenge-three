import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 14
  },
  button: {
    width: '48%'
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
  listContainer: {
    paddingHorizontal: 14
  }
})