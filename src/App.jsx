import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
  const[amount,setAmount]=useState(0)
  const[year,setYear]=useState(0)
  const[rate,setRate]=useState(0)

  const[interest,setInterest]=useState(0)
  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output=amount * year * rate/100
    console.log(output);
    setInterest(output)
  }
  const reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)
  }

  return (
    <div className="App">
      <div className="container">

        <div className="header">
          <h1>simple interest calculator</h1>
          <p>calculate your simple interest with us🤪</p>
        </div>

      <div className="total">
        <h2>₹ {interest}</h2>
        <p>your total interest</p>
      </div>

        <div className="form">
          <form>
            <div className="input"><br />
            <TextField id="outlined-basic" value={amount||""} onChange={(e)=>setAmount(e.target.value)} label="amount" variant="outlined" /><br />
            <TextField id="outlined-basic" value={year||""} onChange={(e)=>setYear(e.target.value)} label="year" variant="outlined" /><br />
            <TextField id="outlined-basic" value={rate||""} onChange={(e)=>setRate(e.target.value)} label="rate" variant="outlined" />

            </div>
            <div className="button">
            <Button variant="contained" onClick={e=>calculate(e)} color="success">calculate</Button>
            <Button variant="contained" onClick={e=>reset(e)} color="success">reset</Button>

            </div>

          </form>
        </div>


      </div>
    </div>
  );
}

export default App;
