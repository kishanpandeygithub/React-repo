import Third from "./third"
import GlobalContext from "./global"
import { useContext } from "react"
export default function Second() {
    const {count ,setCount} = useContext(GlobalContext);
    return (
        <>
            <h2>Kaise hai aap sab log. Mai {count} bol raha hu</h2>
            <Third/>
        </>
    )
}