import React, { useState } from "react";
import ReactDom from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";
function App() {
    return (
        <>
            <Provider store={stores}>
                <Counting></Counting>
            </Provider>
        </>
    )

}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);