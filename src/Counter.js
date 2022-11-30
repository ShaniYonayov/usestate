import { useState } from "react";
function Counter(props) {
    const {delta, max} = props
    const [count, setCount] = useState(1) 

    function incr(){
        setCount(      
            function(oldCount){
                if (oldCount + delta > max ) return 0
                    return oldCount + delta   
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
        
        <p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={reset}>Reset Counter</button>
        </p>
      </div>
    );
  }
  
  export default Counter;