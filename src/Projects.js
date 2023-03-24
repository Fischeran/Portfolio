import React from "react";
import periodicTables from "./images/periodicTables.png"


function Projects() {

    return (
        <section className="container-fluid ">
            <div className="row">
                <h2 className="projectHeader">Projects</h2>
            </div>

            <div className="row periodD">
                <div className="col">
                    <h4>Periodic Tables: Resteraunt Reservation Web App</h4>
                    <p>Full-Stack Web application that helps Resteraunt owners book and reservations and manage seating.
                        <b>Built Using:</b>React, Node.JS, JavaScript, PostgreSQL, Express, HTML5, Bootstrap, CSS, Knex
                    </p>
                </div>
                <div className="col">
                    <img alt="Periodic Tables resteraunt reservation app" src={periodicTables} className="period" />
                </div>
            </div>

        </section>
    )


}


export default Projects