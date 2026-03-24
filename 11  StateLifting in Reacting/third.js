import GlobalContext from "./global"
import { useContext } from "react"
export default function Third() {

    const {count , setCount} = useContext(GlobalContext);

    return (
        <>
            <h2>I am Third child printing { count}</h2>
            <h3>The count is {count}</h3>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}