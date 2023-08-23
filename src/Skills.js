import React from "react";
import animatedDeveloper from "./images/animatedDeveloper.avif"

function Skills () {

    return (
        <section className="container-fluid" id="Skills" style={{padding: "140px"}}>
        
            <div className="row">
                <h2 className="skillsHeader">Skills</h2>
            </div>
        <div className="row" style={{paddingTop: "50px"}}>
            <div className="col-6 skillsCol">
            <div className="frontRow">
                <h4 style={{marginLeft: "10px"}}>Front End</h4>
                <div className="firstRowFrontEnd">
                <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2 m-2">React</span>
                <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">HTML5</span>
                <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">JavaScript</span>
                <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Bootstrap</span>
                <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">CSS3</span>
                </div>
                <div className="secondRowFrontEnd p-2">
                <span className="i1 bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">jQuery</span>
                <span className="i1 bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">JSON</span>
                <span className="i2 bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">XML</span>
                </div>
            </div>
            <div className="backRow">
                <h4 style={{marginLeft: "10px"}}>Back End</h4>
                <div className="firstRowBack">
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Node JS</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Express</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">PostgreSQL</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">RESTful API's</span>
                    
                </div>
            </div>
            <div className="nonRow">
                <h4 style={{marginLeft: "10px"}}>Non-Developement Related</h4>
                <div className="nonFirstRow">
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Google Ads</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Payroll</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">HR</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Onboarding</span>
                    <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Excel</span>
                </div>
            </div>
            </div>
        
        <div className="col-6">
            <img alt="developer working on computer" src={animatedDeveloper} className="workingPicture" />
        </div>
        </div>
        </section>
    )

}

export default Skills