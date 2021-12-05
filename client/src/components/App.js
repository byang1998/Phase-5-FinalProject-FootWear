import '.App.css';
import React from 'react';
import {useEffect, useState} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import ItemInfo from "./ItemInfo";

function App() {
    const [user, setUser] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(true);
    // const [items, setItems] = useState([]);
    // const [currentCart, setCurrentCart] = useState([]);
    // const [cartItems, setCartItems] = useState([]);
    // const [itemInfo, setItemInfo] = useState({})

    useEffect(() => {
        // auto-login
        fetch("http://localhost:3000/me").then((r) => {
            if(r.ok) {
                r.json().then((user) => setUser(user));
            }
        });
    }, []);

    if (!user) return <Login onLogin={setUser} />;

    return (
        <div>
        <img className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Air-Jordan-Symbol.png" alt="shoe" width="500" />
        <div className="shoe-border"/>
        
        <Navbar user={user} setUser={setUser}/>
        <Routes>
        <Route path="/">
            <Home />
        </Route>

        <Route path="About">
            <About />
        </Route>

        <Route path="Cart">
            <Cart />
        </Route>


        </Routes>

        <div className="footer">
        </div>
        </div>
    )
}

export default App;