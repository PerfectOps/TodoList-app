import React from 'react';
import { StyleSheet, View, Button, ImageBackground  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const time = new Date().toLocaleString()

export default function Open({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground 
            source={require('../assets/image/firstScreen.jpg')}
            style={{height: 300, width: 300, resizeMode:'contain'}}
            />
            <Button title='Начать добавление задач' onPress={() => navigation.navigate('Home')}
            style={styles.button}/>
        </View>
    )
  }

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#7984fc'
    },
    button: {
        color: 'black',
        backgroundColor: 'black'
    }
});