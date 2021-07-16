import React, { useState } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import Form from './Components/Form';
import Main from './Navigation/Main';
import Open from './Navigation/Open';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Open' title='Welcome to To-Do List!' component={Open}/>
        <Stack.Screen name='Home' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
