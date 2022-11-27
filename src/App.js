import './App.css';
import Counter from './Counter';
import { useState } from 'react';
// הוא גם משתמש ביוזסטייט אז צריך להביא אותו


function App() {
  const [delta, setDelta] = useState(1)

function handelDelta(e){
  console.log(e);
  setDelta(Number(e.target.value))
}
// כל זה צריך להיות בתוך האפ
  return (
    <div className="App">
      Usestate
      <input type="number" value = {delta} onChange = {handelDelta} />
      <Counter delta = {delta} />
      <Counter delta = {delta} />
      {/* הוספנו עוד שעון */}
      {/* אם נרצה דלתא משותף ל2 השעונים נצטרך להוציא את כל מה שקשור לדלתא מהקאונטר */}
    {/* צריך להעביר את הפרופס
    פה אלמנט האב מעביר לאלמנט הבן את הסטייט */}
    </div>
  );
}

export default App;
