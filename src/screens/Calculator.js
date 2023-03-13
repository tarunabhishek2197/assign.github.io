import React, { useState } from 'react';
import axios from 'axios';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  }

  const handleInputChange = (e) => {
    const inputNum = parseFloat(e.target.value);
    const inputName = e.target.name;
    if (inputName === "num1") {
      setNum1(inputNum);
    } else {
      setNum2(inputNum);
    }
  }

  
  const handleCalculate = () => {
    console.log(num1, num2, operator);
    axios.post('http://localhost:3000/api', {
      num1: num1,
      num2: num2,
      operator: operator,
    
    })
    .then(response => {
      setResult(response.data.result);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='form' style={{marginTop:"100px"}}>
      <input type="number" name="num1" value={num1} onChange={handleInputChange} />
      <select name="operator" value={operator} onChange={handleOperatorChange}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">x</option>
      </select>
      <input type="number" name="num2" value={num2} onChange={handleInputChange} />
      <button style={{fontSize:"20px"}} onClick={handleCalculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;
