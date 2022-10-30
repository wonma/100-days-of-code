import './App.css';
import React from 'react'

function App() {
  const [input, setInput] = React.useState(0);
  const [result, setResult] = React.useState(0)

  function updateInputState(e) {
    if(isNaN(e.target.value)){
      return console.log('please type number')
    } 
    setInput(e.target.value)
  }

  function addNums() {
    setResult(Number(result) + Number(input))
  }
  function subtractNums() {
    setResult(Number(result) - Number(input))
  }
  function multiplyNums() {
    setResult(Number(result) * Number(input))
  }
  function divideNums() {
    setResult(Number(result) / Number(input))
  }
  function resetInput() {
    setInput(0)
  }
  function resetResult() {
    setResult(0)
  }

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <p>Result: {result}</p>
      <input type="text" value={input} onChange={updateInputState} />
      <div>
        <button onClick={addNums}>Add</button>
        <button onClick={subtractNums}>Subtract</button>
        <button onClick={multiplyNums}>Multiply</button>
        <button onClick={divideNums}>Divide</button>
        <button onClick={resetInput} className="reset-btn">Reset input</button>
        <button onClick={resetResult} className="reset-btn">Reset result</button>
      </div>
    </div>
  );
}

export default App;
