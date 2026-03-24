import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "./slicer1";
import CoinCart from "./coincart";
export default function CoinCreate() {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.slice1);

    useEffect(() => {
        dispatch(Fetchdata(20));
    }, [dispatch])
    //display the data of the 20 user
    if (loading) {
        return <h1> Data is loading</h1>
    }
    if (error) {
        return <h1> Error Has Occred</h1>
    }
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {
                    data.map((value) => <CoinCart key={value.id} coin={value}></CoinCart>)
                }
            </div>
        </>
    )
}