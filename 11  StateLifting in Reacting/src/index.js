import React, { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom/client"
import Increment from "./Increment";
import Decrement from "./Decrement";
function App() {
    return (
        <>
            {/* <h1>Parent Count is {count}</h1> */}
            {/* <Increment counts ={count}  setcounts = {setCount} /> */}
            <h1>Hello I am kishan pandey</h1>
            <Increment />
            <Decrement/>
        </>
    )
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);