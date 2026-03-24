import React from "react";
import ReactDom from "react-dom/client"
import stores from "./store";
import { Provider } from "react-redux"
import CoinCreate from "./coinCreate";
function App() {
    return (
        <>
            <Provider store={stores}>
                <CoinCreate></CoinCreate>
            </Provider>
        </>
    )
}
const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);