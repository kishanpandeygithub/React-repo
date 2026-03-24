import React, { useState } from "react";
import ReactDom from "react-dom/client"
import Second from "./second";
import GlobalContext from "./global";
function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <GlobalContext.Provider value={{ count: count, setCount: setCount }}>
                <h1>Parent Count is {count}</h1>
                <Second />
            </GlobalContext.Provider>
        </div>
    );
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);