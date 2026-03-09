import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import Colorful from "./component/colorful";
function Main() {
    let [count, setcount] = useState(0);
    return (
        <>
            <div className="counter">
                <h1>Counter is {count}</h1>
                <button style={{backgroundColor:"blue"}} onClick={() => (setcount(count + 1))}>Increment</button>
            </div>
            <Colorful name="funny" />
        </>
    )
}

const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(<Main />)