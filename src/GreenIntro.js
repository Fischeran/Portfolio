import React from "react";
import arrow from "./images/arrow-point-to-right.png"
import me from "./images/adventureTime.png"


function GreenIntro() {
    
    return (
      <div className="container">  
        <div className="row-lg mainSec" style={{backgroundColor: "rgb(141, 223, 18)" , padding: "150px"}}>
           <div className="col-xs-6">
                <p>Welcome!</p>
                <a href="#">Let me show you around</a>
                <img src={arrow} className="arrow" style={{maxWidth: "3%"}} />
            </div> 
            
            <div className="col-xs-6">
                <img src={me} style={{maxWidth: "30%"}} />
            </div>
        </div>
        </div>
    )


}

export default GreenIntro