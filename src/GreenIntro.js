import React from "react";
import arrow from "./images/arrow-point-to-right.png"



function GreenIntro() {
    return (
        <div className="row-lg mainSec" style={{backgroundColor: "rgb(141, 223, 18)" , padding: "150px"}}>
            <p>Welcome!</p>
            <a href="#">Let me show you around</a>
            <img src={arrow} className="arrow" style={{maxWidth: "3%"}} />
        </div>
    )


}

export default GreenIntro