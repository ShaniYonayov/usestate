import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1) 
    const [delta, setDelta] = useState(1)
    // הגדרנו את המשתנה עם ערך התחלתי של 1
    function incr(){
        setCount(      
            function(oldCount){
                return oldCount +delta
            }
        )
    }
    function reset(){
      setCount(0)     
    }
    function handelDelta(e){
    //   זאת פונק שתלויה בשינוי ובניגוד לקליק פה זה תלוי בשינוי אז נכניס פרמטר אי
       console.log(e);
       setDelta(Number(e.target.value))
    //    ככה תופסים את הערך של  שדה אינפוט, מה שיש בתוך האי
    // אם לא היינו מוסיפים תנמבר, היינו מקבלים מחרוזת, כלומר להוסיף 6 ל1 נקבל 61
    // לא תתבצע סכימה של המספרים ולכן יש להמיר את הסוג מסטרינג לנאמבר
    // אי לא מילה שמורה
    }
     return (
      <div>
        <h1>Counter</h1>
        <input type="number" value = {delta} onChange = {handelDelta} />
        {/*  נכניס משתנה מסוג אינפוט שהברירת מחדל שלו "1" בוליו, ה1 לא משתנה, 
        צריך להגדיר סטייט, אני לא יכולה לשנות שום דבר בלי סטייט ויש להגדיר פונק */}
        {/* לכן נשנה תוליו למשתנה {דלתא} שיצרנו */}
        {/* און ציינג זה מה השינוי בעצם שקורה כשמכניסים אינפוט, 
        ולתוכו נכניס את הפונק שמנהלת את סאט דלתא - הנדל דאלטה */}
        <p>Counter is at {count} </p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        {/* נרצה שבכפתור יהיה כתוב שנוסיף את ערך הדלתא לקאונטר */}
        <button onClick={reset}>Reset Counter</button>
      </div>
    );
  }
  
  export default Counter;