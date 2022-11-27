import { useState } from "react";
function Counter(props) {
    // פרופס זה אובייקט שמחיל את כל המשתנים שאלמנט האב העביר לאלמנט הבן
    const {delta} = props
    // נמשוך את הדלתה מהפרופס
    const [count, setCount] = useState(1) 

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

     return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count} </p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Reset Counter</button>
      </div>
    );
  }
  
  export default Counter;