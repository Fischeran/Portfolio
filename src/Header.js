import React from "react";
import "./Header.css"


function Header() {

    return (
        <div className="container-fluid">
        
           <nav className="nav row-md header">
                    <div className="col-2">
                        <p>Alex Fischer</p>
                    </div>
                    
                    <div className="navBut col-4">
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