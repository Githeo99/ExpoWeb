import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Expo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#b30f4e",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 32,
    color: "white"
  }

});