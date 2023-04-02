import React from "react";
import profile from "./images/profile.jpeg"

function About () {

    return (
        <section>
            <div className="container-fluid About" id="About" style={{padding: "150px", marginTop: "0px", height: "920px", paddingTop: "50px", paddingBottom: "0px"}}>
                <div className="aboutSection">
                <h1 className="row aboutHeader">About</h1>
                <div className="row">
                    <div className="col aboutMe">
                        <p>
                        Hello! Alex here, I am a Full-Stack software engineer proficient in using Javascript for 
                        front-end and back-end programming, React, HTML, CSS, API implementing, Node.JS, Express, PostgreSQL, 
                        and frameworks like Bootstrap. Currently I am working customer support with Payroll software providing
                         troubleshooting and conceptualizing solutions for problems. 
                        Lifelong nerd with a passion for computers and software.
                        </p>
                    </div>
                    <div className="col profilePadding">
                        <img className="profilePic" src={profile} />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )

}


export default About