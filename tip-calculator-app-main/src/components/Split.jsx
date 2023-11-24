
const Button = ({value, onClick}) => {
    return (
        <button name="tip" value={value} onClick={onClick}>
        {value}
        </button>
    )
}

const Split = ({inputStates, handleInputChange}) => {

    const buttonValues = [5,10,15,25,50]; 

  return (
    <div className="split">
        <div>
            <label htmlFor="bill-input">Bill</label>
            <input name='billAmount' type="number" id="bill-input" onChange={handleInputChange} value={inputStates.billAmount}/>
        </div>
        <div>{buttonValues.map((item, index)=> (
            <Button key={index} value={item} onClick={handleInputChange} />
        ))}
            <label htmlFor="tip-input">Custom</label>
            <input type="number" name="tip" id="tip-input" value={inputStates.tip} onChange={handleInputChange}/>
        </div>
        <div>
            <label htmlFor="people-input">No of people </label>
            <input type="number" name="totalPeople" id="people-input" onChange={handleInputChange} value={inputStates.totalPeople}/>
        </div>
    </div>
  )
}

export default Split