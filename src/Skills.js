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
                <table>
                        <tr>
                <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2 m-2">React</span></th>
                <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">HTML5</span></th>
                <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">JavaScript</span></th>
                <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Bootstrap</span></th>
                <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">CSS3</span></th>
                        </tr>
                </table>        
                </div>
                
                <div className="secondRowFrontEnd p-2">
                <table> 
                    <tr>
                <th><span className="i1 bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">jQuery</span></th>
                <th><span className="i1 bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">JSON</span></th>
                <th><span className="i2 bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">XML</span></th>
                    </tr>

                </table>
                </div>

            </div>
            <div className="backRow">
                <h4 style={{marginLeft: "10px"}}>Back End</h4>
                <div className="firstRowBack">
                    <table>
                        <tr>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Node JS</span></th>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Express</span></th>
                   <th> <span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">PostgreSQL</span></th>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">RESTful API's</span></th>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="nonRow">
                <h4 style={{marginLeft: "10px"}}>Non-Developement Related</h4>
                <div className="nonFirstRow">
                    <table>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Google Ads</span></th>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Payroll</span></th>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">HR</span></th>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Onboarding</span></th>
                    <th><span className="bg-secondary bg-opacity-11 border rounded p-1 text-white m-2">Excel</span></th>
                    </table>
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