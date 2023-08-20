import { useState } from "react"

function App(){
  return(
    <TipCalculator />
  )
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = bill * ((percentage + percentage2) / 2 / 100);

  function onReset(){
    setBill("");
    setPercentage(0);
    setPercentage2(0);
  }
  return(
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={percentage} onSetPercentage={setPercentage}>How did you like the service</SelectPercentage>
      <SelectPercentage percentage={percentage2} onSetPercentage={setPercentage2}>How did your friend like the service</SelectPercentage>
      { bill >0 &&
        <>
      <Output bill={bill} tip={tip}/>
      <Reset click={onReset}/>
      </>
}
    </div>
  )
}

function BillInput({bill, onSetBill}){
  
  return(
    <div>
      <label>How much was the bill:  </label>
      <input type="text" placeholder="bill value" value={bill} onChange={(e) => onSetBill(Number(e.target.value))}/>
    </div>
  )
}

function SelectPercentage({children, percentage, onSetPercentage}){
 return(
  <div>
    <label>{children}:  </label>
    <select value={percentage} onChange={(e) => onSetPercentage(Number(e.target.value))}>
      <option value='0'>Dissatisfied (0%)</option>
      <option value='5'>It was okay (5%)</option>
      <option value='10'>It was good (10%)</option>
      <option value='20'>Absolutely amazing! (20%)</option>
    </select>
  </div>
 )
}

function Output({bill, tip}){
  return(
    <h3>You pay {bill + tip} (${bill} + ${tip})</h3>
  )
}

function Reset({click}){
  return(
    <button onClick={click} id="btn">Reset</button>
  )
}


export default App
