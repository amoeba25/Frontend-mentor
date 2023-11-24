import React from 'react'

const Display = ({inputStates, resetValues}) => {

  const {billAmount, tip, totalPeople} = inputStates;
  const tipAmount = billAmount * (tip/100)
  const totalAmount = Number(billAmount) + tipAmount; 

  const tipPerPerson = tipAmount/totalPeople; 
  const totalPerPerson = totalAmount/totalPeople;

  return (
    <div className='display'>

    <div>
      <p>tip per person</p>
      <h2>{isNaN(tipPerPerson) || !isFinite(tipPerPerson) ?'00':tipPerPerson}</h2>
    </div>
    
    <div>
      <p>total per people</p>
      <h2>{isNaN(totalPerPerson) || !isFinite(totalPerPerson) ?'00':totalPerPerson}</h2>
    </div>

    <button onClick={resetValues}>reset</button>
    </div>
  )
}

export default Display