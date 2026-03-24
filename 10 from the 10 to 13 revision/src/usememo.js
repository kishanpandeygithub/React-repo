import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client"


function App() {
    const [number, setNumber] = useState(8);
    const [count, setCount] = useState(10);
    // const [result , setResult] = useState(0);
    
    const fibonacci = function(n) {
        if (n < 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    // useEffect(() => {
    //     setResult(fibonacci(number));
    // } ,[number])

    const result = useMemo(()=>{
        return fibonacci(number)
    } ,[number]);
    return (
        <div id="box">
            <h1>The  count is {count}</h1>
            <button style={{ backgroundColor: "red", marginBottom: "13px" }} onClick={() => { setCount((e) => e + 1)  }}>LOVE</button>
            <br></br>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }}></input>
            <h1> The fibonacci is {-1 * result}</h1>
        </div>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(<App></App>)