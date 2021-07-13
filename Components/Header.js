import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

let today = new Date().toISOString().slice(0, 10);

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.text}>To-Do.             {today}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 115,
        backgroundColor: '#7984fc'
    },
    text: {
        fontSize: 23,
        marginLeft: '20%',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'left'
    }
});
