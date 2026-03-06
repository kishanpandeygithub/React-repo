function Header() {
    return (
        <div className="heading">
            <img className="image" src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-icon-svg-download-png-2249158.png?f=webp&w=256" height='80px' width="80px"></img>
            <div className="options">
                <button className="but">Man</button>
                <button className="but">WoMen</button>
                <button className="but">Kids</button>
                <button className="but">Home</button>
                <button className="but">Living</button>
                <button className="but">Stidio</button>
            </div>
            <input placeholder="Search for the product brand and more" className="searchbar"></input>
            <div className="profile">
                <button className="pro">Profile</button>
                <button className="pro">WishList</button>
                <button className="pro">Bag</button>
            </div>
        </div>
    )
}
export default Header;