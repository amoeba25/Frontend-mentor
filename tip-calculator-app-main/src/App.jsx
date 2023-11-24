import { useState } from 'react'
import './App.css'
import Split from './components/Split'
import Display from './components/Display';

function App() {

  const [inputStates, setInputStates] = useState({
    billAmount: 0,
    tip: 0,
    totalPeople: 0
  })


  const handleInputChange = (e)=> {

    const {name, value} = e.target
    setInputStates({
      ...inputStates,
      [name] : value 
    })

  }

  const resetValues = () => {
    setInputStates({
      billAmount: 0,
      tip: 0,
      totalPeople: 0
    })
  }

  return (
    <>
      <Split inputStates= {inputStates} handleInputChange= {handleInputChange} />
      <Display inputStates={inputStates} resetValues = {resetValues}/>
    </>
  )
}

export default App
