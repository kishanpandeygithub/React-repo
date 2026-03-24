import { useState } from "react"
import { useDispatch } from "react-redux";
import { CostomIncreaser, Decrement, Increment } from "./Sicer1";

export default function CostomCounter() {
    const [number , setNumber] = useState("");
    const dispatch = useDispatch();
    function handelClick(){
        dispatch(CostomIncreaser(Number(number)));
    }
    return (
        <>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}}></input>
            <button onClick={handelClick}>Submit</button>
        </>
    )
}