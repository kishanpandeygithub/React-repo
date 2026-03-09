import { memo, useState } from "react";
import { useEffect } from "react";
import React from "react";
function colorful({name}) {
    console.log(name);
    const [Color, setColor] = useState("black");

    //useEffecthook
    // useEffect(callback , dependency )
    useEffect(() => {
        console.log("use effect eicuted");
        document.body.style.backgroundColor = Color;
    }, [Color]);

    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="but">
                <button style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>Red</button>
                <button style={{ backgroundColor: "green" }} onClick={() => setColor("green")}>Green</button>
                <button style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>Blue</button>
                <button style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>Yellow</button>
                <button style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}>Orange</button>
            </div>
        </>
    )
}
export default React.memo(colorful) ;