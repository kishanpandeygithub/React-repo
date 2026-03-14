import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    const [password, setPassword] = useState("kishanpandey");
    const [length, setLength] = useState(10);
    const [number, setNumber] = useState(false);
    const [charcter, setCharcter] = useState(false);

    const findPassword = useCallback(() => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (number) {
            str += "0123456789";
        }
        if (charcter) {
            str += "~!@#$%^&*()_+";
        }
        let ans = "";
        for (let i = 0; i < length; i++) {
            let len = Math.floor(Math.random() * str.length);
            ans += str[len];
        }
        setPassword(ans);
    }, [length, number, charcter]);

    useEffect(() => {
        findPassword();
    },[findPassword]);
    return (
        <div className="box">
            <h1 style={{ fontSize: "18px" }}>{password}</h1>
            <div>
                <input type="range" min={1} max={50} value={length} onChange={(e) => { setLength(Number(e.target.value)) }}></input>
                <label> {length}</label>
                <input id="number" type="checkbox" checked={number} onChange={(e) => { setNumber(!number) }}></input>
                <label htmlFor="number">Number</label>
                <input id="charcter" type="checkbox" checked={charcter} onChange={(e) => { setCharcter(!charcter) }}></input>
                <label htmlFor="charcter">Charcter</label>
            </div>
        </div>
    )
}

const reactroot = ReactDOM.createRoot(document.getElementById("root"));
reactroot.render(<PasswordGenerator />);