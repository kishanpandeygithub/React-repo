import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/card";
import Footer from "./component/Fotter";
import Header from "./component/Header";
import arr from "./utils/data";
//header , body ,footer
function App() {
    return (
        <>
            <Header />
            <div className="middle" style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    arr.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.offer} />)
                }
            </div>
            <Footer/>
        </>
    )
}


const Root = document.getElementById("root");
const Reactroot = ReactDOM.createRoot(Root);
Reactroot.render(<App />);