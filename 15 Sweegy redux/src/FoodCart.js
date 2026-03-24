import { useState } from "react";
import { addItems , removeItems } from "./Slice";
import { useDispatch } from "react-redux";
export default function FoodCart({value}) {
    const [inCart, setInCart] = useState(false);
    const dispatch =useDispatch();
    function handleClick() {
        if (inCart) {
            setInCart(false);
            dispatch(removeItems());
        }
        else {
            dispatch(addItems());
            setInCart(true);
        }
    }

    return (
        <>
            <h1 id="foodname">{value.food}</h1>
            <h1 id="foodprice">{value.Price}</h1>
            <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
        </>
    )
} 