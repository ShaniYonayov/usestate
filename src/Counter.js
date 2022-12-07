import { useState, useEffect } from "react";

function Counter(props) {
    const {delta, max, getReset, needToReset, getCounter } = props
    // ניקח מהאבא תפונקציה גאט קאונטר שמזהה תערך המקסימי
    // אני מושכת תפונקציה מתוך הפרופס, מהאבא
    const [count, setCount] = useState(1)
 
    useEffect(()=>{
      if(needToReset){
        setCount(0)
        getReset(false)
      }
    },[needToReset, getReset])

    function incr(){
        setCount(      
            function(oldCount){
                if (oldCount + delta > max ){
                   getCounter(0) 
                  //  אם זה לא גדול אז נכניס 0, לא מעניין אותי כמה
                   return 0
                  }
                    // getCounter(oldCount + delta)
                    // return oldCount + delta 
                  // אם הערך יותר גדול אז נכניס את הערך החדש לפונקציה גאט קאונטר ושם המקס יתעדכן 
                  let output = oldCount + delta
                  getCounter(output)
                  return output
                  // דרך נוספת בה לא צריך לחשב פעמיים, פשוט שמנו תחישוב במשתנה חדש 
                }
            )
        }
    
    function reset(){
      getReset(true)
      // setCount(0)     
    }


     return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count} </p>
        
        <p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Reset Counter</button>
        </p>
      </div>
    );
  }
  
  export default Counter;