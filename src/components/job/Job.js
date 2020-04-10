import React from 'react'
import { Container, JobList, Jobtitle, Jobtype } from './styles'
const Job = ({ title, type }) => {
  return (
    <Container>
      <JobList>
        <Jobtitle>{title}</Jobtitle>
        <Jobtype>{type}</Jobtype>
      </JobList>
    </Container>
  )
}

export default Job
