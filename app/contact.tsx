import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {

  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [msg, setMessage] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async () => {

    setErrorMessage(null); // reset error

    await supabase
      .from('contact')
      .insert([{ 
        name: name,
        subject: subject,
        message: msg
       }])
      .then(({ error }) => {

          if (error) {

            setErrorMessage(error.message);

          } else {
            setName('');
            setSubject('');
            setMessage('');
          }

      })

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact me!</Text>
      <form style={styles.contact_form}>
        {errorMessage && (
          <Text
            style={{
              backgroundColor: '#ffe5e5',
              color: '#b00020',
              padding: 10,
              borderRadius: 4,
              marginBottom: 10,
            }}
          >
            {errorMessage}
          </Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Subject"
          value={subject}
          onChangeText={setSubject}
        />
        <TextInput
          multiline
          style={[styles.input, styles.input_msg]}
          placeholder="Message"
          value={msg}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={handleSubmit} />
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: "#b36c0f",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    color: "white"
  },

  contact_form: {
    display: "flex",
    flexDirection: "column"
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10
  },

  input_msg: {
    height: 100,
    textAlignVertical: "top"
  }

});