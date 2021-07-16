import React, { useState } from 'react';
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native';
import Header from '../Components/Header';
import ListItem from '../Components/ListItem';
import Form from '../Components/Form';

export default function Main() {
    const [listOfItems, setListOfItems] = useState([
    ])
  
    const addTask = (text) => {
      setListOfItems((list) => {
        return [
          { text: text, key: Math.random().toString(36).substring(7) },
          ...list
        ]
      })
    }
  
    const deleteTask = (key) => {
      setListOfItems((list) => {
        return list.filter(listOfItems => listOfItems.key != key)
      })
    }
  
    return (
      <View>
        <View>
          <Header />
        </View>
        <View>
          <Form addTask={addTask}/>
        </View>
        <SafeAreaView>
          <FlatList data={listOfItems} renderItem={({ item }) => (
            <ListItem el={item} deleteTask={deleteTask}/>
          )} />
        </SafeAreaView>
      </View>
    );
  }