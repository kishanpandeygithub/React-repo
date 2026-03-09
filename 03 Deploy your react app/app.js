import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//     "h1",
//     {
//         key: "first",
//         id: "first",
//         className: "kishan",
//         style: { background: "blue", fontSize: "30px", color: "black" }
//     },
//     "hello i am kishan pandey"
// );

// const element2 = React.createElement(
//     "h1",
//     {
//         key: "second",
//         id: "second",
//         className: "kishan",
//         style: { background: "blue", fontSize: "30px", color: "black" }
//     },
//     "maja aaya mughe"
// );

// const div1 = React.createElement("div", {}, [element, element2]);


// jsx: you can writhe the code like html in  the js

//how to add the multiple child
// const newElement = <h1>Hello i am kishan pandey</h1>;
// jsx:me ap js ke expression ko bhi daal sakte ho but you have to use the {} brackt
const name = "kishan";
const obj = {
    name: "kishan", age: 23, salary: 30000
}
// const prop =
const newElement = (
    <div>
        <h1 id="first" className="name">Hello i am {obj.salary} pandey</h1>
        <h1 style={{
            backgroundColor: "green",
            color: "black"
        }}>How are you</h1>
    </div>
);
const root = document.getElementById("root");
const Reactroot = ReactDOM.createRoot(root);

Reactroot.render(newElement);
// what is the react component in the react 
// function based componenet 
function greet() {
    return <h1>Aur bhai kaisa hai</h1>
};
function meet() {
    return <h1>Mai to mast hu bhai</h1>
};


const newElement2 = greet();
const newElement3 = meet();
const element4 = <>{newElement} {newElement2} {newElement3}</>
Reactroot.render(element4);