import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-cont">
            <div className="logo-cont">
                <img className="logo" 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQax6ivsZZZl7KaEhtO195TQPdeuEfinL82ZQ&usqp=CAU'
                alt='no-img' />
            </div>
            <div className="nav-cont">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;