import React from "react";
import ReactDom from "react-dom/client"
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";
import { reactslicer } from "./Sicer1";
import CostomCounter from "./CostomCounter";
function App() {
    console.log(stores);
    console.log(reactslicer);
    return (
        <>
            <Provider store={stores}>


                <Counting></Counting><br>
                </br>
                <br>
                </br>
                <CostomCounter></CostomCounter>
            </Provider>
        </>
    )

}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);