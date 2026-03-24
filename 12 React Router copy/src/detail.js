import { Outlet ,Link } from "react-router"
export default function Detail() {
    return (
        <>
        <nav>
            <Link to="Hello">Hello</Link>
            <Link to="/detail">Detail</Link>
            <Link to="Hi">HI_Page</Link>
        </nav>
            <h1>Hello I am detail Page</h1>
            <Outlet></Outlet>
        </>
    )
}
