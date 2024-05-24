import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppItem from './AppItem';

export default function AppList() {
  const [items, setItems] = useState([
    {id:1, quantidade: 5, descricao: "arroz"},
    {id:2, quantidade: 1, descricao: "feijão"},
    {id:3, quantidade: 0.5, descricao: "charque"},
    {id:4, quantidade: 10, descricao: "café"},
    {id:5, quantidade: 2, descricao: "tapioca"},
    {id:6, quantidade: 1, descricao: "ketshup"}
  ])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras
      </Text>
      <ScrollView style={styles.scrollContainer}>
      { items.map(item => {
        return <AppItem key={item.id} id={item.id}
        item={item.quantidade + 'de' + 
          item.descricao}/>
        })}
      </ScrollView>
    </View>
  );
}

JavaScript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  scrollContainer: {
    flex: 1,
    width: '90%'
  },
  itemsContainer: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
});
