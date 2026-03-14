import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";

function App() {
    const [color, setColor] = useState("white");
    const [count , setcount] =useState(0);
    useEffect(() => {
        console.log("hello use effect exicuted");
        document.body.style.backgroundColor = color;
    }, [color])

    return (
        <div className="box">
            <div className="counter">
                <h1>Counter is {count}</h1>
                <button style={{ backgroundColor: "blue" }} onClick={() => (setcount(count + 1))}>Increment</button>
            </div>
            <h1>Background Color Changer</h1>
            <div>
                <button id="red" style={{ backgroundColor: "red" }} onClick={(e) => { setColor("red") }} className="btn">Red</button>
                <button id="green" style={{ backgroundColor: "green" }} onClick={(e) => { setColor(e.target.id) }} className="btn">Green</button>
                <button id="blue" style={{ backgroundColor: "blue" }} onClick={(e) => { setColor(e.target.id) }} className="btn">Blue</button>
                <button id="yellow" style={{ backgroundColor: "yellow" }} onClick={(e) => { setColor(e.target.id) }} className="btn">Yellow</button>
                <button id="orange" style={{ backgroundColor: "orange" }} onClick={(e) => { setColor(e.target.id) }} className="btn">Orenge</button>
            </div>
        </div>
    )
}

const Reactroot = ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App />);
