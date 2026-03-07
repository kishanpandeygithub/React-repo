import React  ,{useState} from "react";
import ReactDOM from 'react-dom/client';




function Counter() {
    let [count , setCount] = useState(0);
    function incrementNumber() {
        count = count + 1;
        setCount(count);
    }
    function decrementNumber() {
        count = count - 1;
        setCount(count);
    }
    return (
        <div className="first">
            <h1>Count is {count}</h1>
            <button onClick={incrementNumber}>Increment</button>
            <button onClick={decrementNumber}>Decrement</button>
        </div>
    )
}
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
Reactroot.render(<Counter />);