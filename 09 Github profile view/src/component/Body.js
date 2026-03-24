import React, {useCallback , useEffect, useState } from "react";
import UseFetch from "../useFetch";
function Body() {
    
    const {numberofprofile , GenerateProfile , setnumberofprofile , Profile} =UseFetch();
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