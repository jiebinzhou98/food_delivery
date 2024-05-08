import React, {Component, useState, useRef} from "react";
import './header.css'
import Logo from '../images/logo.png'
import cartIcon from '../images/cart.png'
import searchBarIcon from '../images/searchBar.png'

const Header = () =>{
    const [activeMenuItem, setActiveMenuItem] = useState(null);
    const footerRef = useRef(null);

    const handleMenuClick = (menuItem) =>{
        setActiveMenuItem(menuItem)
        console.log("Clicked on ${menuItem}")
        if(menuItem === "Contact Us"){
           window.scrollTo({
            top: document.body.scrollHeight, behavior:"smooth"
           })
        }
    }
    return (
        <div className="navbar">
            <img src={Logo} className="nav-logo"/>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("Home")} className={activeMenuItem === "Home" ? "active": ""}>Home</li>
                <li onClick={() => handleMenuClick("Menu")} className={activeMenuItem === "Menu" ? "active": ""}>Menu</li>
                <li onClick={() => handleMenuClick("Contact Us") }className={activeMenuItem === "Contact Us" ? "active": ""}>Contact-us</li>
            </ul>
            <div className="navbar-right">
                <img src={searchBarIcon}/>
                <div className="navp-cart">
                    <img src={cartIcon}/>
                    <div className="dot"></div>
                </div>
                <button className="nav-user">Sign In</button>
            </div>
            <div ref= {footerRef}></div>
        </div>
    )
}

export default Header