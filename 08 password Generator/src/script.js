import React, { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom/client"
function PasswordGenerator() {
    const [password, setPassword] = useState("ASDFGHJKL");
    const [length, setLength] = useState(10);
    const [numberChanged, setNumberChanged] = useState(false);
    const [charcterChanged, setCharcterChanged] = useState(false);

    const generatePassword = useCallback(() => {
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numberChanged)
            str += '0123456789';
        if (charcterChanged)
            str +="!@#$%^&*+_><!@#$%^&*(+_)(*&^%$#@"
        let pass = "";
        for (let i = 0; i < length; i++) {
            let ran = Math.floor(Math.random() * str.length);
            pass += str[ran];
        }
        setPassword(pass);
    } ,[length, numberChanged, charcterChanged])
    

    useEffect(() => {
        generatePassword();
    },[generatePassword])

    return (
        <>
            <h1>{password}</h1>
            <div className="second">
                <input type="range" min={5} max={50} value={length} onChange={(e) => setLength(e.target.value)}></input>
                <label>Length is {length}</label>
                <input id="number" type="checkbox" defaultChecked={numberChanged} onChange={(e) => { setNumberChanged(!numberChanged) }}></input>
                <label htmlFor="number">Number</label>
                <input id="charcter" type="checkbox" defaultChecked={charcterChanged} onChange={(e) => { setCharcterChanged(!charcterChanged) }}></input>
                <label htmlFor="charcter">Charcter</label>
            </div>
        </>
    )
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<PasswordGenerator />);