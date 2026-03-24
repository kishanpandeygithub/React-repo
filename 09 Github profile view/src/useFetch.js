import { useEffect , useState  ,useCallback } from "react";
function UseFetch() {
    const [numberofprofile, setnumberofprofile] = useState("");
    const [Profile, setProfile] = useState([]);

    const GenerateProfile = useCallback(async function (count) {
        const ran = Math.floor(Math.random() * 6000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
        const data = await response.json();
        setProfile(data);
    }, []);

    useEffect(() => {
        GenerateProfile(10);
    }, []);
    return {numberofprofile , GenerateProfile , setnumberofprofile , Profile};
}
export default UseFetch;