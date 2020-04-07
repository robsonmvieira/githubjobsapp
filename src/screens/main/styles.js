import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: #362f50;
`
export const Label = styled.Text`
  padding: 16px;
  color: #8B81FC;
  font-size: 18px;
`

export const FormContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 16px;
  
`
export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#8B81FC'
})`
  padding: 16px;
  margin: 16px;
  color: #8B81FC;
  border: 1px solid #CC48F0;
  border-radius: 5px;
  font-size: 14px;
  flex-grow: 1;
`
export const BtnSubmit = styled.TouchableHighlight.attrs({
  underlayColor: 'yellow'
})`
  background: #CC48F0;
  border-radius: 5px;
  padding: 25px 30px;
  align-items: center;
`
export const BtnLabel = styled.Text`
  color: #fff
`
