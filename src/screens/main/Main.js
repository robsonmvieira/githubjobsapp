import React, { useState } from 'react'
import api from '../../services/api'
import {
  Container,
  Label,
  InputSearch,
  FormContainer,
  BtnSubmit,
  BtnLabel
} from './styles'

export default function Main () {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState([])
  const handlerSubmit = () => {
    const url = `https://jobs.github.com/positions.json?description=${job}`
    api.get(url).then(response => setJobs(response.data))
      .catch(error => console.log(error))
    setJob('')
  }
  return (
    <Container>
      <Label>
        Search a new Position
      </Label>
      <FormContainer>
        <InputSearch
          value={job} onChangeText={v => setJob(v)}
          placeholder='search a new Job'
        />
        <BtnSubmit onPress={handlerSubmit}><BtnLabel>Find</BtnLabel></BtnSubmit>
      </FormContainer>
      <Label>{jobs.length}</Label>
    </Container>
  )
}
