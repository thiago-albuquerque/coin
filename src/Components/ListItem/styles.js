import styled from 'styled-components';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #333;
  border-radius: 5px;
  padding: 10px 5px;
  margin: 10px 0;
  elevation: 4;
`;
export const NameContainer = styled.View``;

export const SymbolContainer = styled.View`
  width: 30%;
  flex-direction: row;
  align-items: center;
`;
export const NumbersContainer = styled.View`
  width: 30%;
`;
export const Text = styled.Text`
  color: #c9e843;
`;
export const NameCoin = styled.Text`
  font-weight: bold;
  color: #c9e843;
`;
export const NameSymbol = styled.Text`
  font-style: italic;
  color: #888;
`;
export const NameInfo = styled.Text`
  font-weight: bold;
  color: #c9e843;
`;
export const TextInfo = styled.Text`
  color: #fff;
`;
