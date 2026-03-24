import { useSelector } from "react-redux"

export default function Header() {
    const count = useSelector((state)=>(state.slice.count))
    return (
        <div style={{display:"flex" , alignContent:"center" , justifyContent:"center" , gap:"30px"}}>
            <h1>Sweegy</h1>
            <h2>Cart :{count}</h2>
        </div>
    )
}