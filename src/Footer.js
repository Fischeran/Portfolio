import React from "react";

function Footer () {

    return (
        <footer id="footer" className="container-fluid footer">
        <div className="foot row">  
        <div className="col-md port">
            <h4 style={{marginLeft: "10px"}}>Alex Fischer</h4>
            <p>Portfolio Website</p>
        </div>
        <div className="col port">
        <h4 href="#Home">Explore</h4>
                        <a href="#About">About</a>
                        <a href="#Skills">Skills</a>
                        <a href="#Projects">Projects</a>
                        <a href="#Contact">Contact</a>
        </div>
        <div className="col port socials">
            <h4>Socials</h4>
            
        </div>
        </div>  
        </footer>
    )
}

export default Footer