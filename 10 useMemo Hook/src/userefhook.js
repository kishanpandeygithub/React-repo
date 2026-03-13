import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom/client";

// function App(){
//     const [count , setCount] = useState(0);
//     const money = useRef(0)
//     return (
//         <div className="box">
//             <h1> counter is: {count}</h1>
//             <button className="btn" onClick={()=>{setCount(count+1)}}>Increment</button>

//             <h1> Money is: {money.current}</h1>
//             <button className="btn" onClick={()=>{money.current =money.current+1. , console.log(money.current);}}>Increment</button>

//         </div>
//     )
// }

//this is the project of the stopwatch
function StopWatch() {
    const [Time , setTime] =useState(0);
    function start(){
        
    }
    function stop(){

    }   
    function reset(){

    }
    return (
        <div className="box">
            <h1 className="text">StopWatch Is :{Time}</h1>
            <button className="btn" onClick={start}>Start</button>
            <button className="btn" onClick={stop}>Stop</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    )
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<StopWatch />);