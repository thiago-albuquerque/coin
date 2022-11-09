import React from 'react';
import {Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {NumericFormat} from 'react-number-format';

import {
  Container,
  BackButton,
  SymbolContainer,
  NameContainer,
  InfoContainer,
  NumbersContainer,
  NameCoin,
  NameSymbol,
  NameInfo,
  TextInfo,
} from './styles';

export default function ActionModal({data, closeModal}) {
  return (
    <Container>
      <BackButton onPress={closeModal}>
        <Feather name="arrow-left" size={36} color="#555" />
      </BackButton>

      <SymbolContainer>
        <Image
          source={{uri: data.icon}}
          style={{width: 60, height: 60, marginRight: 10}}
        />

        <NameContainer>
          <NameCoin>{data.name}</NameCoin>
          <NameSymbol>Cod - {data.symbol}</NameSymbol>
        </NameContainer>
      </SymbolContainer>

      <InfoContainer>
        <NumbersContainer>
          <NameInfo>Preço:</NameInfo>
          <NumericFormat
            value={data.price}
            displayType="text"
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$ "
            decimalScale={2}
            renderText={value => <TextInfo>{value}</TextInfo>}
          />
        </NumbersContainer>

        <NumbersContainer>
          <NameInfo>Valor de mercado:</NameInfo>
          <NumericFormat
            value={data.marketCap}
            displayType="text"
            decimalSeparator=","
            thousandSeparator="."
            prefix="R$ "
            decimalScale={2}
            renderText={value => <TextInfo>{value}</TextInfo>}
          />
        </NumbersContainer>

        <NumbersContainer>
          <NameInfo>Alteração de preço:</NameInfo>
          <NumericFormat
            value={data.priceChange1h}
            displayType="text"
            allowNegative
            decimalScale={2}
            renderText={value => <TextInfo>{value} %</TextInfo>}
          />
        </NumbersContainer>

        <NumbersContainer>
          <NameInfo>Volume:</NameInfo>
          <NumericFormat
            value={data.volume}
            displayType="text"
            decimalSeparator=","
            thousandSeparator="."
            decimalScale={2}
            renderText={value => <TextInfo>{value}</TextInfo>}
          />
        </NumbersContainer>
      </InfoContainer>
    </Container>
  );
}
