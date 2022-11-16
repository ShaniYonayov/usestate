import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1) 
    //נגדיר משתנה ואת הפונקציה שבאמצעותה המשתנה הזה יתעדכן
    // היוזסטייט יוצר את שני המשתנים ו1 זה הערך הראשון שלו ואני מחליטה את השמות שלהם
    function incr(){
        // ניצור פונקציה שבאמצעותה נעדכן את משתני הסטייט
        // הפונק אינכריס מפעילה את סטקאונט שמקבלת פונקציה
        setCount(
            // הפונק סטקאונט מקבלת פונקציה
            function(oldCount){
                // הפונקציה הזאת מגדירה מה אני רוצה שיקרה כשאני מפעילה את אינקריז וזה שהערך יעלה ב1
                return oldCount + 1
            }
        )
        console.log(count)
        // באינקריז אני עושה עוד דברים חוץ מלעדכן את משתנה הסטייט
        // ובגלל זה לא הכנסתי את אולדקאונט לאוןקליק למטה
        // 
    }
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1 to Counter</button>
      </div>
    );
  }
  
  export default Counter;