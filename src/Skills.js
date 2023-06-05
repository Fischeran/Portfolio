import React from "react";
import animatedDeveloper from "./images/animatedDeveloper.avif"

function Skills () {

    return (
        <section className="container-fluid" id="Skills">
        
            <div className="row">
                <h2 className="skillsHeader">Skills</h2>
            </div>
        <div className="row">
            <div className="col-6">
            <div className="frontRow">
                <h4>Front End</h4>
                <div className="firstRowFrontEnd">
                <span>React</span>
                <span>HTML5</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>CSS3</span>
                </div>
                <div className="secondRowFrontEnd">
                <span>jQuery</span>
                <span>JSON</span>
                <span>XML</span>
                </div>
            </div>
            <div className="backRow">
                <h4>Back End</h4>
                <div className="firstRowBack">
                    <span>Node JS</span>
                    <span>Express</span>
                    <span>PostgreSQL</span>
                    <span>RESTful API's</span>
                    
                </div>
            </div>
            <div className="nonRow">
                <h4>Non-Developement Related</h4>
                <div className="nonFirstRow">
                    <span>Google Ads</span>
                    <span>Payroll</span>
                    <span>HR</span>
                    <span>Onboarding</span>
                    <span>Excel</span>
                </div>
            </div>
            </div>
        
        <div className="col-6">
            <img alt="developer working on computer" src={animatedDeveloper} />
        </div>
        </div>
        </section>
    )

}

export default Skills