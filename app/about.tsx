import { Text, View, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#5c0fb3",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: "white"
  }

});