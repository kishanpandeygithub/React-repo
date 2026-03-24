function Increment({counts , setCounts}) {
    
    return (
        <>
            <button onClick={() => setCounts(counts + 1)}>Increment</button>
        </>
    )
}
export default Increment;