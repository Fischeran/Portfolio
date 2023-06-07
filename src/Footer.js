import React from "react";
import github from "./images/glogo2.png"
import linked from "./images/linked.png"

function Footer () {

    return (
        <footer id="footer" className="container-fluid footer">
        <div className="foot row">  
        <div className="col-md port">
            <h4 style={{marginLeft: "10px"}}>Alex Fischer</h4>
            <p>Portfolio Website</p>
        </div>
        <div className="col port explorediv">
        <h4 href="#Home">Explore</h4>
                        <a href="#About">About</a>
                        <a href="#Skills">Skills</a>
                        <a href="#Projects">Projects</a>
                        <a href="#Contact">Contact</a>
        </div>
        <div className="col port socials">
            <h4>Socials</h4>
            <div className="logos">
            <a href="https://github.com/Fischeran" className="githublogo" target="_blank" rel="noreferrer"><img src={github} alt="github logo" className="glogo" /></a>
            <a href="https://www.linkedin.com/in/alex-fischer-fisheran/" className="linkedlogo" target="_blank" rel="noreferrer"><img src={linked} alt="linked In logo" className="glogo" /></a>
            </div>
        </div>
        </div>  
        </footer>
    )
}

export default Footer