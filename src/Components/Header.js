import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between shadow-lg bg-orange-100">
            <div className="">
                <img className="w-20" 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQax6ivsZZZl7KaEhtO195TQPdeuEfinL82ZQ&usqp=CAU'
                alt='no-img' />
            </div>
            <div className="flex m-2 p-5">
                <ul className="flex items-center">
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;