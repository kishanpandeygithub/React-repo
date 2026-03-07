import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/card";
import Footer from "./component/Fotter";
import Header from "./component/Header";
import arr from "./utils/data";
import { useState } from "react";
//header , body ,footer
// this line convet the array of the object to the array of cards which can be passed as the 
// variable or expression in the {} bress 



function App() {
    let [A, setA] = useState(arr);
    function sortArray() {
        arr.sort((a, b) => a.price - b.price);
        setA([...A]);
    };
    function PriceAbove500(){
        let Arr =arr.filter((value)=> value.price>=500 )
        setA([Arr]);
    }
    return (
        <>
            <Header />
            <button className="sort" onClick={sortArray}>Sort by price</button>
            <button className="sort" onClick={PriceAbove500}>PriceAbove500</button>
            <div className="middle" style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    A.map((vlaue, index) => {
                        return <Card key={index} cloth={vlaue.cloth} offer={vlaue.offer} price={vlaue.price} image={vlaue.image} />;
                    })
                }
            </div>
            <Footer />
        </>
    )
}


const Root = document.getElementById("root");
const Reactroot = ReactDOM.createRoot(Root);
Reactroot.render(<App />);