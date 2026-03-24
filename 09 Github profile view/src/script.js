import React, { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom/client"
import Header from "./component/Header";
import Body from "./component/Body";

function GithubProfile() {
    //header 
    // body with the 10 card 
    return (
        <>
            <Header />
            <Body />
        </>
    )
}
const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<GithubProfile/>);