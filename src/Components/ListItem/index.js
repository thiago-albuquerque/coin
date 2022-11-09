import React, {useState} from 'react';
import {Image, Modal} from 'react-native';

import {NumericFormat} from 'react-number-format';

import ActionModal from '../ActionModal';

import {
  Container,
  NameContainer,
  SymbolContainer,
  NumbersContainer,
  NameCoin,
  NameSymbol,
  NameInfo,
  TextInfo,
} from './styles';

export default function ListItem({data}) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <Container onPress={() => setVisibleModal(true)}>
      <SymbolContainer>
        <Image
          source={{uri: data.icon}}
          style={{width: 35, height: 35, marginRight: 10}}
        />
        <NameContainer>
          <NameCoin>{data.name}</NameCoin>
          <NameSymbol>Cod - {data.symbol}</NameSymbol>
        </NameContainer>
      </SymbolContainer>

      <NumbersContainer>
        <NameInfo>Preço:</NameInfo>
        <NumericFormat
          value={data.price}
          displayType="text"
          decimalSeparator=","
          thousandSeparator="."
          prefix="R$ "
          decimalScale={2}
          renderText={price => <TextInfo>{price}</TextInfo>}
        />
      </NumbersContainer>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleModal}
        onRequestClose={() => setVisibleModal(false)}>
        <ActionModal data={data} closeModal={() => setVisibleModal(false)} />
      </Modal>
    </Container>
  );
}
