import React, { useState } from "react";
import ReactDom from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router"
import About from "./about";
import Contect from "./contect";
import Detail from "./detail";
import Home from "./home";
import Hello from "./hello";
import Zero from "./zero";
function App() {
    return (
        <BrowserRouter>
            {/* Header */}
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contect">Contect</Link>
                <Link to="/detail">Detail</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contect" element={<Contect></Contect>}></Route>
                <Route path="/detail" element={<Detail></Detail>}>
                    <Route index element={<Zero></Zero>}></Route>
                    <Route path="Hello" element={<Hello></Hello>}></Route>
                </Route>
            </Routes>
            {/* Footer */}
        </BrowserRouter>
    )
}

const reactroot = ReactDom.createRoot(document.getElementById("root"));
reactroot.render(<App />);