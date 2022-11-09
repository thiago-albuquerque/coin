import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fefefe;
  padding: 0 3%;
`;
export const BackButton = styled.TouchableOpacity`
  margin: 5% 0 10% 0;
`;
export const SymbolContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #000;
  border-radius: 5px;
  margin-bottom: 30px;
  elevation: 5;
`;
export const NameContainer = styled.View`
  padding: 5px 0;
`;
export const InfoContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export const NumbersContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #333;
  border-radius: 5px;
  padding: 20px 8px;
  margin-bottom: 15px;
  elevation: 4;
`;
export const NameCoin = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: #c9e843;
`;
export const NameSymbol = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  color: #888;
`;
export const NameInfo = styled.Text`
  font-weight: bold;
  color: #fff;
`;
export const TextInfo = styled.Text`
  font-weight: bold;
  color: #000;
  background: #c9e843;
  border-radius: 4px;
  padding: 5px;
  elevation: 3;
`;
