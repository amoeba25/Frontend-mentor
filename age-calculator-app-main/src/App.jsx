import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'


function App() {

  const [submittedData, setSubmittedData] = useState({
    year: '',
    month: '',
    day: ''
  }); 

  const [error, setError] = useState({
    year: '',
    month: '',
    day: ''
  })


  const handleFormSubmit = (data) => {
    setSubmittedData(data); 
  }


  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      <Display submittedData={submittedData} />
    </>
  )
}

export default App
