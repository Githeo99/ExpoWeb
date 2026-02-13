import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Ping() {

  const [message, setMessage] = useState<string>('Loading...');

  const [submit, setText] = useState(''); // state for input field

  useEffect(() => {
      supabase
        .from('ping') //The supabase table
        .select('message') //The column to select
        .limit(3)
        .then(({ data, error }) => {
          if (error) {
            setMessage('Error – check console');
          } else {
                  // Join messages into one string
            const allMessages = data.map(row => row.message).join(' | ');
            setMessage(allMessages);
          }
        });
    },

    []

  );

  const handleSubmit = async () => {
    if (submit.trim() === '') return Alert.alert('Please enter a message');

    const { data, error } = await supabase
      .from('inbox')
      .insert([{ message: submit }])

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      Alert.alert('Success', 'Message saved!');
      setText(''); // clear input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your message"
        value={submit}
        onChangeText={setText}
      />
      <Button title="Send" onPress={handleSubmit} />
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
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  }

});