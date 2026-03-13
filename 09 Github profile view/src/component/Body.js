import React, {useCallback , useEffect, useState } from "react";

function Body() {
    const [numberofprofile, setnumberofprofile] = useState("");
    const [Profile, setProfile] = useState([]);

    const GenerateProfile = useCallback(async function (count) {
        const ran = Math.floor(Math.random() * 6000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
        setProfile(data);
    } ,[]);

    useEffect(() => {
        GenerateProfile(10);
    }, []);

    return (
        <div className="but">
            <input className="input" type="text" value={numberofprofile} onChange={(e) => setnumberofprofile(e.target.value)}></input>
            <button onClick={() => GenerateProfile(Number(numberofprofile))} >Search Profile</button>
            <div className="pr">
                {
                    Profile.map((value, index) => {
                        return <div key={value.id} className="cards">
                            <img id="Profile_Image" src={value.avatar_url}></img>
                            <h2>{value.login}</h2>
                            <a href={value.html_url} target="blank">Profile</a>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Body;