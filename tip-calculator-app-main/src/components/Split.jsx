
const Button = ({value, onClick}) => {
    return (
        <button name="tip" value={value} onClick={onClick} className='py-1 px-8 bg-veryDarkCyan text-white rounded block'>
        {value}%
        </button>
    )
}

const Split = ({inputStates, handleInputChange}) => {

    // const buttonValues = [5,10,15,25,50]; 
    const buttonValues = [5, 10, 15, 25];

  return (
    <div className="split w-1/2">
        <div className='flex flex-col mb-8'>
            <label htmlFor="bill-input" className="text-grayishCyan text-xs">Bill</label>
            <input name='billAmount' type="number" className='bg-veryLightGrayishCyan' id="bill-input" onChange={handleInputChange} value={inputStates.billAmount}/>
        </div>
        <div>
            <p className="text-grayishCyan text-xs capitalize mb-2">Select tip %</p>
            <div className="button-grid flex flex-wrap justify-between space-y-1">
                {buttonValues.map((item, index)=> (
                <Button key={index} value={item} onClick={handleInputChange} />
            ))}
            {/* <input type="number" name="tip" id="tip-input" placeholder="Custom" value={inputStates.tip} onChange={handleInputChange}/> */}
            </div>
        </div>
        <div className="flex flex-col">
            <label htmlFor="people-input" className="text-grayishCyan text-sm">Number of people </label>
            <input type="number" name="totalPeople" id="people-input" onChange={handleInputChange} value={inputStates.totalPeople}/>
        </div>
    </div>
  )
}

export default Split