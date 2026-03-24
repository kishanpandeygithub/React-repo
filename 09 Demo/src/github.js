import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body.js";

function App() {
    return (
        <>
            <Header/>
            <Body/>
        </>
    )
}

const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
ReactRoot.render(<App />)