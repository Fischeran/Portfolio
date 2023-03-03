import React from "react";
import "./Header.css"


function Header() {

    return (
        <div className="container-fluid">
        
           <nav className="nav row-md header">
                    <div className="col-2">
                        <p style={{marginTop: "15px", fontSize: "40px"}}>Alex Fischer</p>
                    </div>
                    
                    <div className="navBut col-4" style={{fontSize: "20px"}}>
                        <a href="#" className="navBar">Home</a>
                        <a href="#About" className="navBar">About</a>
                        <a href="#" className="navBar">Skills</a>
                        <a href="#" className="navBar">Portfolio</a>
                        <a href="#" className="navBar">Contact</a>
                    </div>    
            </nav>    
        
        </div>

    )
}


export default Header