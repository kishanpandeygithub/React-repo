import React, { useMemo, useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
//counter hoge jo ki number ko increase carega 
// 1: counter increase
// 2: inout field :fibonacci number nikalega 
// 0 1 1 2 3 5 8


function findFibo(n) {
    if (n <= 1) {
        return n;
    }
    return findFibo(n - 1) + findFibo(n - 2);
}
function App() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // const [result, setResult] = useState(0);


    // useEffect(() => {
    //     let num = findFibo(number);
    //     setResult(num);
    // }, [number]);

    const result = useMemo(() => {
        return findFibo(number)
    }, [number]);

    return (
        <div className="box">
            <h1 className="text">The counter is {count}</h1>
            <button className="btn" onClick={() => { setCount(count + 1) }}>Increment</button>
            <button className="btn" onClick={() => { setCount(count - 1) }}>Decrement</button>
            <div>
                <h1>fibonacci Number is {result}</h1>
                <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }}></input>
            </div>
        </div>
    )
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);