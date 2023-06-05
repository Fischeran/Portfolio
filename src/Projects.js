import React from "react";
import periodicTables from "./images/periodicTables.png"
import Flash from "./images/Flash.png"
import loveMovies from "./images/loveMovies.png"


function Projects() {

    return (
        <section className="container-fluid " id="Projects">
            <div className="row">
                <h2 className="projectHeader">Projects</h2>
            </div>

            <div className="row periodD">
                <div className="col-3">
                    <h4 style={{paddingLeft: "13px"}}>Periodic Tables: Resteraunt Reservation Web App</h4>
                    <p className="periodFlexText">Full-Stack Web application that helps Resteraunt owners book and reservations and manage seating.
                       <br></br>
                       <br></br>
                        <b>Built Using:</b>React, Node.JS, JavaScript, PostgreSQL, Express, HTML5, Bootstrap, CSS, Knex
                    </p>
                </div>
                <div className="col-3">
                    <img alt="Periodic Tables resteraunt reservation app" src={periodicTables} className="period" />
                </div>
            </div>

            <div className="row flashcardApp">
                <div className="col-3" style={{}}>
                    <img alt="Flash card Application used to help students study" src={Flash} className="flash" />
                </div>
                <div className="col-3">
                    <h4 style={{paddingLeft:"13px"}}>Flash: Study solutions</h4>
                    <p className="periodFlexText2">Front End application that allows students to create, read, update, and delete flashcards in order to help them study.</p>
                   
                    <p style={{paddingLeft: "13px", marginTop: "0"}}><b>Built Using:</b>React, JavaScript, HTML5, Bootstrap, CSS, JSON</p>
                </div>
            </div>

            <div className="row movies">
                <div className="col-3">
                    <h4 style={{paddingLeft:"13px"}}>We Love movies</h4>
                    <p className="periodFlatText3">Back End application that allows users to view theaters and the movies they are showing</p>

                    <p><b>Built Using:</b>Node.js, React, Express, PostgreSQL, Knex</p>
                </div>
                <div className="col-3">
                    <img alt="List of movies shows with options to find out where they are playing" src={loveMovies} className="movie" />
                </div>
            </div>

        </section>
    )


}


export default Projects