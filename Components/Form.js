import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView } from 'react-native';

export default function Form({ addTask }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text)
    };

    const clear = () => {
        setValue('')
      }


  return (
    <SafeAreaView style={styles.fromComp}>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу..' value = {text} />
        <Button title='Add Task' style={styles.button}  onPress={() => {addTask(text), clear()} }/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
        input: {
            backgroundColor: 'white',
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
            marginVertical: 30,
            marginHorizontal: '20%',
            width: '60%',  
        },
        button: {
            flexDirection: 'row'
        },
        fromComp: {
            backgroundColor: '#7984fc'
        }
});
