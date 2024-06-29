import { useState } from 'react'
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
    <div className='bg-lightGrayishCyan h-full flex justify-center items-center flex-col'>
      <h1 className='mb-4 tracking-[0.3em] text-veryDarkCyan md:mb-10'>SPLI <br /> TTER </h1>
      <div className="main w-1/2 bg-white rounded-xl py-6 px-8 flex">
        <Split inputStates= {inputStates} handleInputChange= {handleInputChange} />
        <Display inputStates={inputStates} resetValues = {resetValues}/>
      </div>
    </div>
  )
}

export default App
