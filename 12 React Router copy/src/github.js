import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function Github() {
    const {name} =useParams();

    const [profile , setProfile] = useState("kishan");

    async function fetchUser() {
        const responce = await fetch(`https://api.github.com/users/${name}`)
        const data = await responce.json();
        setProfile(data);
    }
    useEffect(()=>{
        fetchUser();
    } ,[])
    return (
        
        <>
            <h1> This is the Github Profile </h1>
            {/* display the user data */}
            <div>
                <img src={profile?.avatar_url}></img>
                <h2>{profile?.login}</h2>
            </div>
        </>
    )
}