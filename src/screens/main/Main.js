import React, { useState } from 'react'
import api from '../../services/api'
import JobItem from '../../components/job/Job'
import { ActivityIndicator, View, FlatList } from 'react-native'
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
  const [loading, setloading] = useState(false)

  const handlerSubmit = () => {
    setloading(true)
    setJobs([])
    const url = `https://jobs.github.com/positions.json?description=${job}`
    api.get(url).then(response => {
      setJobs(response.data)
      setloading(false)
    }
    )
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
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        {loading && <ActivityIndicator color='#fff' />}
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={jobs}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <JobItem title={item.title} type={item.type} />}
        />
      </View>
      <Label>Total: {jobs.length > 0 ? jobs.length : 0}</Label>
    </Container>
  )
}
