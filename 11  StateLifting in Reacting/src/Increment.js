import { useState } from "react";
function Increment() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Child Count is {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}
export default Increment;