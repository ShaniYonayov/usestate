import './App.css';
import Counter from './Counter';
import { useState } from 'react';



function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(10)
  const [reset, setReset] = useState(false)
  const [allMaxValue, setAllMaxValue] = useState(1)

function handelDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}

function handelMax(m){
  setMax(Number(m.target.value))
  }  

function getReset(data){
  console.log(data)
  setReset(data)
}

function getAllMax(data){
  console.log(data)
  if(data > allMaxValue){
    setAllMaxValue(data)
  }
  else{
    setAllMaxValue(allMaxValue)
  }
}

  return (
    <div className="App">
     <h1>Usestate</h1>
     <label> Enter Counter jumping number
      <input type="number" value = {delta} onChange = {handelDelta} />
      </label>
      <label>Enter Counter MAX number
        <input type="number" value = {max} onChange = {handelMax}/ >
      </label>
      <label>Maximum value {allMaxValue}</label>
      <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset} getAllMax = {getAllMax} />
      <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset} getAllMax = {getAllMax} />

    </div>
  );
}

export default App;
