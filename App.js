import React, {useState, useEffect} from 'react';
import {StatusBar} from 'react-native';

import {Container, FlatList} from './styles';

import Header from './src/Components/Header';
import ListItem from './src/Components/ListItem';

import api from './src/services/api';

export default function App() {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    async function getItems() {
      const response = await api.get('coins?skip=0&limit=10&currency=BRL');

      setCoin(response.data.coins);
    }
    getItems();
  }, []);

  return (
    <Container>
      <StatusBar hidden={false} backgroundColor={'#000'} />
      <Header />

      <FlatList
        data={coin}
        renderItem={({item}) => (
          <ListItem data={item} onPress={() => openModal(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
