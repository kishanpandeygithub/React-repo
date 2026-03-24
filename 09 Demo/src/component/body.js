import React, { useCallback, useEffect, useState } from "react";

export default function Body() {
    const [Profile, setProfile] = useState([]);
    const [count, setCount] = useState(20);
    const GetProfile = useCallback( async function() {
        let ran = Math.floor(Math.random()*6000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
        setProfile(data);
    } ,[count]);
    useEffect(() => {
        GetProfile();
    }, [])

    return (
        <div>
            <input type="number" id="input" value={count} onChange={(e) => { setCount(e.target.value) }}></input>
            <button id="btn" onClick={()=>{GetProfile()}}>Find</button>
            <div className="container">
                {
                    Profile.map((value, index) => {
                        return <div key={index} id="box">
                            <img src={value.avatar_url} id="img"></img>
                            <div>
                                <h2>{value.login}</h2>
                                <a href={value.html_url}><button>Profile Link</button></a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}