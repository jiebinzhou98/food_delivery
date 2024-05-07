import React, {Component} from "react";
import './header.css'
import Logo from '../images/logo.png'
import cartIcon from '../images/cart.png'
import searchBarIcon from '../images/searchBar.png'

const Header = () =>{
    return (
        <div className="navbar">
            <img src={Logo} className="nav-logo"/>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Menu</li>
                <li>Contact-us</li>
            </ul>
            <div className="navbar-right">
                <img src={searchBarIcon}/>
                <div className="navp-cart">
                    <img src={cartIcon}/>
                    <div className="dot"></div>
                </div>
                <button className="nav-user">Sign In</button>
            </div>
        </div>
    )
}

export default Header