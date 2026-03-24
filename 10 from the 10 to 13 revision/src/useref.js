import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom/client";

// this is the insise function which is the witten here just for the cleat the code 
// const money = useRef(0);
// return (
//     <div id="box">
//         <h1>The Count is {count}</h1>
//         <button onClick={() => { setCount((e) => e + 1) }}>Increment</button>
//         <h1>The money is {money.current}</h1>
//         <button onClick={()=>{money.current= money.current+1}} >Money Increase</button>
//     </div>
// )

function App() {
    const [time, setTime] = useState(0);
    let Timer = useRef(null);
    const [isRunning, setRunning] = useState(false);

    function Start() {
        if (!isRunning) {
            Timer.current = setInterval(() => {
                setTime((e) => e + 1);
            }, 1000);
            setRunning(true);
        }
        // return clearInterval(Timer.current);
    }
    function Stop() {
        if (isRunning) {
            clearInterval(Timer.current);
            setRunning(false);
        }
    }
    function Reset() {
        clearInterval(Timer.current);
        setRunning(false);
        setTime(0);
    }
    return (

        <div id="box">
            <h1>Current time is {time}</h1>
            <button onClick={Start}> Start</button>
            <button onClick={Stop}> stop</button>
            <button onClick={Reset}> Reset</button>
        </div>
    )

}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);