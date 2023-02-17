import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 14,
    padding: 14
  },
  formContainer:{
    flex: 1,
    paddingHorizontal: 14,
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginBottom: 20
  },
  inputNumber: {
    width: '56%',
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500'
  },
})