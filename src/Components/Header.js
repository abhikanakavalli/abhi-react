import React from "react";

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;