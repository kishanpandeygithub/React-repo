import React from "react";
import ReactDom from "react-dom/client"
import { Provider } from "react-redux"
import Header from "./Header";
import Card from "./Card";
import { Provider } from "react-redux";
import stores from "./store";
function App() {
    return (
        <>

            <Provider store={stores}>
                <Header></Header>
                <Card></Card>
            </Provider>

        </>
    )
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);