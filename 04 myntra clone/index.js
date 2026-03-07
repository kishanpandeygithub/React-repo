import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello I am Kishan Pandey</h1>;

//jsx ke andar aap kisi bi expresson ko dal sakte hai
// but we cant writhe the statement like let a = 0; 
//expresson are this thing which produce the result 
// const obj ={
//     name:"kishan" ,
//     age: 32
// }

// const arr = [20 , 40 , "kishan" , 10];
// const props ={
//     name:"kishan" ,
//     age:"32"
// }
function Greet(props) {
    return <h2 >Ram ram bhi {props.name} {props.age} ne</h2>
}
// we have many methood to call the function this is the form of the jsx
//but the condetion is that the first letter of  the function should be in the capatial 

const element2 = <Greet name="kishan" age="32"/> 
/* <Greet/> simply a function call how we can pass the argument  */
/* we can write the <Greet name:"kishan" age:"23"/> */

const root = document.getElementById("root");
const Reactroot = ReactDOM.createRoot(root);
Reactroot.render(element2);
// Reactroot.render(greet("kishan"));