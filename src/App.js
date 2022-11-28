import './App.css';
import Counter from './Counter';
import { useState } from 'react';



function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(1)

function handelDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}
function handelMax(m){
  setMax(Number(m.target.value))
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
      <Counter delta = {delta} max = {max} />
      <Counter delta = {delta} max = {max} />
    </div>
  );
}

export default App;
