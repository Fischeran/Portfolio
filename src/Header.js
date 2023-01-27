import React from "react";
import "./Header.css"


function Header() {

    return (
        <div className="header row-md">
           <nav className="nav row">
                    <div>
                        <p>Alex Fischer</p>
                    </div>
                    
                    <div className="navBut">
                        <a href="#" className="navBar">Home</a>
                        <a href="#" className="navBar">About</a>
                        <a href="#" className="navBar">Skills</a>
                        <a href="#" className="navBar">Portfolio</a>
                        <a href="#" className="navBar">Contact</a>
                    </div>    
            </nav>    
        </div>
    )
}


export default Header