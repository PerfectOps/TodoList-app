import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ListItem({ el, deleteTask }) {
  return (
      <ScrollView style={styles.view}>
        <TouchableOpacity onPress={() => deleteTask(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        padding: 10,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: 15,
        width: '70%',
        height: 70,
        marginLeft: '15%'
    },
    view: {
      
    }
});
