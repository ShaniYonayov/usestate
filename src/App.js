import './App.css';
import Counter from './Counter';
import { useState } from 'react';



function App() {
  const [delta, setDelta] = useState(1)
  const [max, setMax] = useState(10)
  const [reset, setReset] = useState(false)
  const [counter, setCounter] = useState(0)
  // מתעדכן כל פעם שאחד הקאונטרים מתעדכן
  // הקאונטר לא בשימוש אם לא נציג אותו 
  const [counterMax, setCounterMax] = useState(0)
  // הערך המקסימלי שהיה עד עכשיו 

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

function getCounter(counter){
  setCounter(counter)
  // נעדכן את הערך של הקאונטר - לא חייב את זה אלה אם נרצה להציג את הערך של הקאונטר אצל האבא
  if(counter > counterMax)
  setCounterMax(counter)
  // אם הקאונטר יותר גדול מהערך במקס קאונטר נעדכן תמקס קאונטר אליו
}
// את הפונק הזאת אני שולחת לבן והוא באמצעותה מעדכן את הקאונטר

  return (
    <div className="App">
     <label> Enter Counter jumping number
      <input type="number" value = {delta} onChange = {handelDelta} />
      </label>
      <label>Enter Counter MAX number
        <input type="number" value = {max} onChange = {handelMax}/ >
      </label>
      <p>Maximum value {counterMax}</p>
      {/* נחזיר תערך המקסימלי */}
      <p>Current value {counter}</p>
      {/* לא חייב אבל אם נציג אותו יהיה שימוש לקאונט */}
      {/* הוא מקבל את הערך של הקאונטר שממנו קיבל את הערך האחרון */}
      <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset} getCounter = {getCounter} />
      <Counter delta = {delta} max = {max} getReset = {getReset} needToReset = {reset} getCounter = {getCounter} />
      {/* נעביר תערך של הפונקציה גאט קאונטר לבנים שלי ל2 הקאונטרים */}

    </div>
  );
}

export default App;
