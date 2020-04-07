import React from 'react'

import { Container, Label, InputSearch, FormContainer, BtnSubmit, BtnLabel } from './styles'

export default function Main () {
  return (
    <Container>
      <Label>
        Search a new Position
      </Label>
      <FormContainer>
        <InputSearch placeholder='search a new Job' />
        <BtnSubmit><BtnLabel>Search</BtnLabel></BtnSubmit>
      </FormContainer>
    </Container>
  )
}
